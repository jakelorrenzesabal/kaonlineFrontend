import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Restaurant, MenuItem } from '@app/_models';

const baseUrl = `${environment.apiUrl}/restaurants`;
const menuItemUrl = `${environment.apiUrl}/menu-items`;

@Injectable({ providedIn: 'root' })
export class RestaurantService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Restaurant[]>(baseUrl);
    }

    getById(id: number) {
        return this.http.get<Restaurant>(`${baseUrl}/${id}`);
    }

    getMyRestaurant() {
        return this.http.get<Restaurant>(`${baseUrl}/my-restaurant`);
    }

    create(params: any) {
        return this.http.post<Restaurant>(baseUrl, params);
    }

    update(id: number, params: any) {
        return this.http.put<Restaurant>(`${baseUrl}/${id}`, params);
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    // Menu Item CRUD
    getMenuItems(restaurantId: number) {
        return this.http.get<MenuItem[]>(`${menuItemUrl}/restaurant/${restaurantId}`);
    }

    createMenuItem(params: any) {
        return this.http.post<MenuItem>(menuItemUrl, params);
    }

    updateMenuItem(id: number, params: any) {
        return this.http.put<MenuItem>(`${menuItemUrl}/${id}`, params);
    }

    deleteMenuItem(id: number) {
        return this.http.delete(`${menuItemUrl}/${id}`);
    }
}
