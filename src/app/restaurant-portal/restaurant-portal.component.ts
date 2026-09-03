import { Component, OnInit } from '@angular/core';
import { RestaurantService, OrderService, AlertService } from '@app/_services';
import { Restaurant, MenuItem, Order } from '@app/_models';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-restaurant-portal',
    templateUrl: './restaurant-portal.component.html'
})
export class RestaurantPortalComponent implements OnInit {
    restaurant: Restaurant | null = null;
    menuItems: MenuItem[] = [];
    orders: Order[] = [];
    loading = false;
    activeTab: 'orders' | 'menu' | 'settings' = 'orders';

    // Menu Item Form
    showMenuItemModal = false;
    editingItem: MenuItem | null = null;
    itemForm = {
        name: '',
        description: '',
        price: 0,
        category: 'Main Course',
        imageUrl: '',
        isAvailable: true
    };

    constructor(
        private restaurantService: RestaurantService,
        private orderService: OrderService,
        private alertService: AlertService
    ) {}

    ngOnInit(): void {
        this.loadMyRestaurant();
    }

    loadMyRestaurant(): void {
        this.loading = true;
        this.restaurantService.getMyRestaurant().pipe(first()).subscribe({
            next: (data) => {
                this.restaurant = data;
                this.loading = false;
                if (data && data.RestaurantId) {
                    this.loadMenuItems(data.RestaurantId);
                    this.loadOrders(data.RestaurantId);
                }
            },
            error: (err) => {
                this.loading = false;
                this.alertService.error(err);
            }
        });
    }

    loadMenuItems(restaurantId: number): void {
        this.restaurantService.getMenuItems(restaurantId).pipe(first()).subscribe({
            next: (items) => this.menuItems = items
        });
    }

    loadOrders(restaurantId: number): void {
        this.orderService.getByRestaurant(restaurantId).pipe(first()).subscribe({
            next: (data) => this.orders = data
        });
    }

    updateOrderStatus(orderId: number, status: string): void {
        this.orderService.updateStatus(orderId, status).pipe(first()).subscribe({
            next: () => {
                this.alertService.success(`Order #${orderId} status updated to ${status}`);
                if (this.restaurant?.RestaurantId) {
                    this.loadOrders(this.restaurant.RestaurantId);
                }
            },
            error: (err) => this.alertService.error(err)
        });
    }

    openAddMenuItemModal(): void {
        this.editingItem = null;
        this.itemForm = {
            name: '',
            description: '',
            price: 0,
            category: 'Main Course',
            imageUrl: '',
            isAvailable: true
        };
        this.showMenuItemModal = true;
    }

    openEditMenuItemModal(item: MenuItem): void {
        this.editingItem = item;
        this.itemForm = {
            name: item.name,
            description: item.description || '',
            price: item.price,
            category: item.category,
            imageUrl: item.imageUrl || '',
            isAvailable: item.isAvailable !== false
        };
        this.showMenuItemModal = true;
    }

    saveMenuItem(): void {
        if (!this.restaurant || !this.restaurant.RestaurantId) return;
        if (!this.itemForm.name || this.itemForm.price <= 0) {
            this.alertService.error('Item name and a valid price are required.');
            return;
        }

        if (this.editingItem && this.editingItem.MenuItemId) {
            this.restaurantService.updateMenuItem(this.editingItem.MenuItemId, this.itemForm).pipe(first()).subscribe({
                next: () => {
                    this.alertService.success('Menu item updated!');
                    this.showMenuItemModal = false;
                    this.loadMenuItems(this.restaurant!.RestaurantId!);
                }
            });
        } else {
            const payload = {
                ...this.itemForm,
                RestaurantId: this.restaurant.RestaurantId
            };
            this.restaurantService.createMenuItem(payload).pipe(first()).subscribe({
                next: () => {
                    this.alertService.success('Menu item added!');
                    this.showMenuItemModal = false;
                    this.loadMenuItems(this.restaurant!.RestaurantId!);
                }
            });
        }
    }

    deleteMenuItem(id: number): void {
        if (confirm('Are you sure you want to delete this menu item?')) {
            this.restaurantService.deleteMenuItem(id).pipe(first()).subscribe({
                next: () => {
                    this.alertService.success('Menu item deleted');
                    if (this.restaurant?.RestaurantId) {
                        this.loadMenuItems(this.restaurant.RestaurantId);
                    }
                }
            });
        }
    }

    saveRestaurantDetails(): void {
        if (!this.restaurant || !this.restaurant.RestaurantId) return;
        this.restaurantService.update(this.restaurant.RestaurantId, this.restaurant).pipe(first()).subscribe({
            next: () => this.alertService.success('Restaurant info updated successfully!')
        });
    }
}
