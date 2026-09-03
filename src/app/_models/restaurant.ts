import { MenuItem } from './menu-item';

export interface Restaurant {
    RestaurantId?: number;
    AccountId?: number;
    name: string;
    cuisine: string;
    description?: string;
    address: string;
    phone: string;
    rating?: number;
    imageUrl?: string;
    isOpen?: boolean;
    created?: Date;
    MenuItems?: MenuItem[];
}
