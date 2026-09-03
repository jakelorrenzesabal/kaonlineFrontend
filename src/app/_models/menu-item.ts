export interface MenuItem {
    MenuItemId?: number;
    RestaurantId: number;
    name: string;
    description?: string;
    price: number;
    category: string;
    imageUrl?: string;
    isAvailable?: boolean;
    created?: Date;
}
