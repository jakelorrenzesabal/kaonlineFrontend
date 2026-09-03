import { Component, OnInit } from '@angular/core';
import { OrderService, AccountService, RestaurantService, AlertService } from '@app/_services';
import { Order, Account, Restaurant } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'overview.component.html' })
export class OverviewComponent implements OnInit {
    orders: Order[] = [];
    accounts: Account[] = [];
    restaurants: Restaurant[] = [];
    riders: Account[] = [];
    loading = false;

    totalRevenue = 0;

    constructor(
        private orderService: OrderService,
        private accountService: AccountService,
        private restaurantService: RestaurantService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.loadAdminMetrics();
    }

    loadAdminMetrics(): void {
        this.loading = true;

        this.orderService.getAll().pipe(first()).subscribe({
            next: (orders) => {
                this.orders = orders;
                this.totalRevenue = orders.reduce((sum, o) => sum + Number(o.totalAmount || 0), 0);
                this.loading = false;
            }
        });

        this.accountService.getAll().pipe(first()).subscribe({
            next: (accounts) => {
                this.accounts = accounts;
                this.riders = accounts.filter(a => a.role === 'Rider');
            }
        });

        this.restaurantService.getAll().pipe(first()).subscribe({
            next: (res) => this.restaurants = res
        });
    }

    assignRiderToOrder(orderId: number, riderIdStr: string): void {
        const riderId = Number(riderIdStr);
        if (!riderId) return;
        this.orderService.assignRider(orderId, riderId).pipe(first()).subscribe({
            next: () => {
                this.alertService.success(`Rider assigned to Order #${orderId}`);
                this.loadAdminMetrics();
            },
            error: (err) => this.alertService.error(err)
        });
    }

    updateStatus(orderId: number, status: string): void {
        this.orderService.updateStatus(orderId, status).pipe(first()).subscribe({
            next: () => {
                this.alertService.success(`Order #${orderId} status updated to ${status}`);
                this.loadAdminMetrics();
            }
        });
    }
}