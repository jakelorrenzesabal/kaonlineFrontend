import { Component, OnInit } from '@angular/core';
import { OrderService, AlertService, AccountService } from '@app/_services';
import { Order, Account } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-rider-portal',
    templateUrl: './rider-portal.component.html'
})
export class RiderPortalComponent implements OnInit {
    account: Account | null = null;
    availableOrders: Order[] = [];
    myDeliveries: Order[] = [];
    loading = false;
    activeTab: 'my-deliveries' | 'available' = 'my-deliveries';

    constructor(
        private orderService: OrderService,
        private accountService: AccountService,
        private alertService: AlertService
    ) {
        this.account = this.accountService.accountValue;
    }

    ngOnInit(): void {
        this.loadRiderData();
    }

    loadRiderData(): void {
        this.loading = true;
        this.orderService.getRiderDeliveries().pipe(first()).subscribe({
            next: (data) => {
                this.myDeliveries = data;
                this.loading = false;
            },
            error: (err) => {
                this.loading = false;
                this.alertService.error(err);
            }
        });

        this.orderService.getAvailableForRiders().pipe(first()).subscribe({
            next: (data) => {
                this.availableOrders = data;
            }
        });
    }

    acceptOrder(orderId: number): void {
        this.orderService.assignRider(orderId).pipe(first()).subscribe({
            next: () => {
                this.alertService.success(`Accepted Order #${orderId} for delivery!`);
                this.loadRiderData();
            },
            error: (err) => this.alertService.error(err)
        });
    }

    updateDeliveryStatus(orderId: number, status: string): void {
        this.orderService.updateStatus(orderId, status).pipe(first()).subscribe({
            next: () => {
                this.alertService.success(`Order #${orderId} status updated to ${status}`);
                this.loadRiderData();
            },
            error: (err) => this.alertService.error(err)
        });
    }
}
