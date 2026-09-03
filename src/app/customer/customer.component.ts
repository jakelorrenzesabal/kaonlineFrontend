import { Component, OnInit } from '@angular/core';
import { RestaurantService, OrderService, AccountService, AlertService } from '@app/_services';
import { Restaurant, MenuItem, Order, Account } from '@app/_models';
import { first } from 'rxjs/operators';

interface CartItem {
    menuItem: MenuItem;
    quantity: number;
}

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {
    account: Account | null = null;
    restaurants: Restaurant[] = [];
    selectedRestaurant: Restaurant | null = null;
    menuItems: MenuItem[] = [];
    cart: CartItem[] = [];
    myOrders: Order[] = [];
    activeTrackingOrder: Order | null = null;
    loading = false;
    submittingOrder = false;

    // Filter
    selectedCategory = 'All';
    categories: string[] = ['All'];

    // Checkout Form
    deliveryAddress = '';
    contactPhone = '';
    paymentMethod = 'Cash on Delivery'; // Cash on Delivery, GCash / E-Wallet, Card
    specialInstructions = '';

    // Views: 'browse', 'menu', 'cart', 'orders', 'track'
    activeTab: 'browse' | 'orders' | 'track' = 'browse';

    constructor(
        private restaurantService: RestaurantService,
        private orderService: OrderService,
        private accountService: AccountService,
        private alertService: AlertService
    ) {
        this.account = this.accountService.accountValue;
        if (this.account) {
            this.deliveryAddress = '123 Main St, Metro Manila';
            this.contactPhone = '+63 917 123 4567';
        }
    }

    ngOnInit(): void {
        this.loadRestaurants();
        this.loadMyOrders();
    }

    loadRestaurants(): void {
        this.loading = true;
        this.restaurantService.getAll().pipe(first()).subscribe({
            next: (data) => {
                this.restaurants = data;
                this.loading = false;
            },
            error: (err) => {
                this.alertService.error(err);
                this.loading = false;
            }
        });
    }

    loadMyOrders(): void {
        this.orderService.getMyOrders().pipe(first()).subscribe({
            next: (orders) => {
                this.myOrders = orders;
                if (orders.length > 0 && !this.activeTrackingOrder) {
                    this.activeTrackingOrder = orders[0];
                }
            }
        });
    }

    selectRestaurant(restaurant: Restaurant): void {
        this.selectedRestaurant = restaurant;
        this.menuItems = restaurant.MenuItems || [];
        // Extract categories
        const catSet = new Set<string>();
        catSet.add('All');
        this.menuItems.forEach(item => {
            if (item.category) catSet.add(item.category);
        });
        this.categories = Array.from(catSet);
        this.selectedCategory = 'All';
    }

    get filteredMenuItems(): MenuItem[] {
        if (this.selectedCategory === 'All') {
            return this.menuItems;
        }
        return this.menuItems.filter(i => i.category === this.selectedCategory);
    }

    addToCart(item: MenuItem): void {
        if (this.selectedRestaurant && this.cart.length > 0) {
            const currentRestaurantId = this.cart[0].menuItem.RestaurantId;
            if (currentRestaurantId !== item.RestaurantId) {
                if (confirm('Your cart contains items from another restaurant. Clear cart and add this item?')) {
                    this.cart = [];
                } else {
                    return;
                }
            }
        }

        const existing = this.cart.find(c => c.menuItem.MenuItemId === item.MenuItemId);
        if (existing) {
            existing.quantity += 1;
        } else {
            this.cart.push({ menuItem: item, quantity: 1 });
        }
        this.alertService.success(`Added ${item.name} to cart`);
    }

    removeFromCart(item: MenuItem): void {
        const index = this.cart.findIndex(c => c.menuItem.MenuItemId === item.MenuItemId);
        if (index > -1) {
            if (this.cart[index].quantity > 1) {
                this.cart[index].quantity -= 1;
            } else {
                this.cart.splice(index, 1);
            }
        }
    }

    clearCart(): void {
        this.cart = [];
    }

    get cartTotal(): number {
        return this.cart.reduce((sum, item) => sum + (item.menuItem.price * item.quantity), 0);
    }

    placeOrder(): void {
        if (this.cart.length === 0) {
            this.alertService.error('Your cart is empty');
            return;
        }
        if (!this.deliveryAddress.trim() || !this.contactPhone.trim()) {
            this.alertService.error('Please enter delivery address and contact phone number');
            return;
        }

        this.submittingOrder = true;
        const payload = {
            RestaurantId: this.cart[0].menuItem.RestaurantId,
            items: this.cart.map(c => ({
                MenuItemId: c.menuItem.MenuItemId,
                name: c.menuItem.name,
                quantity: c.quantity,
                price: c.menuItem.price
            })),
            deliveryAddress: this.deliveryAddress,
            contactPhone: this.contactPhone,
            paymentMethod: this.paymentMethod,
            specialInstructions: this.specialInstructions,
            totalAmount: this.cartTotal
        };

        this.orderService.create(payload).pipe(first()).subscribe({
            next: (order) => {
                this.submittingOrder = false;
                this.cart = [];
                this.alertService.success('Order placed successfully!');
                this.loadMyOrders();
                this.trackOrder(order);
            },
            error: (err) => {
                this.submittingOrder = false;
                this.alertService.error(err);
            }
        });
    }

    trackOrder(order: Order): void {
        this.activeTrackingOrder = order;
        this.activeTab = 'track';
    }

    refreshTracking(): void {
        if (this.activeTrackingOrder && this.activeTrackingOrder.OrderId) {
            this.orderService.getById(this.activeTrackingOrder.OrderId).pipe(first()).subscribe({
                next: (updatedOrder) => {
                    this.activeTrackingOrder = updatedOrder;
                }
            });
        }
    }

    getOrderStepIndex(status: string): number {
        switch (status) {
            case 'Pending': return 1;
            case 'Confirmed':
            case 'Accepted': return 2;
            case 'Preparing': return 3;
            case 'Ready for Pickup':
            case 'Picked Up': return 4;
            case 'Out for Delivery': return 4;
            case 'Delivered': return 5;
            default: return 1;
        }
    }
}
