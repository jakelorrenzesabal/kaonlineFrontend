import { Restaurant } from './restaurant';
import { Account } from './account';

export interface OrderItem {
    OrderItemId?: number;
    OrderId?: number;
    MenuItemId: number;
    itemName: string;
    quantity: number;
    price: number;
}

export interface Payment {
    PaymentId?: number;
    OrderId?: number;
    paymentMethod: string;
    amount: number;
    paymentStatus: string;
    transactionRef?: string;
    created?: Date;
}

export interface Delivery {
    DeliveryId?: number;
    OrderId?: number;
    riderAccountId?: number;
    deliveryStatus: string;
    pickupTime?: Date;
    deliveryTime?: Date;
    estimatedMinutes?: number;
    deliveryNotes?: string;
    updated?: Date;
    Rider?: Account;
}

export interface Order {
    OrderId?: number;
    AccountId?: number;
    RestaurantId: number;
    riderAccountId?: number;
    totalAmount: number;
    deliveryAddress: string;
    contactPhone: string;
    status: string; // Pending, Confirmed, Preparing, Ready for Pickup, Picked Up, Out for Delivery, Delivered, Cancelled
    specialInstructions?: string;
    created?: Date;
    updated?: Date;
    Restaurant?: Restaurant;
    Customer?: Account;
    Rider?: Account;
    OrderItems?: OrderItem[];
    Payment?: Payment;
    Delivery?: Delivery;
}
