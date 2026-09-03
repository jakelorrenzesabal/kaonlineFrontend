import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Order } from '@app/_models';

const baseUrl = `${environment.apiUrl}/orders`;

@Injectable({ providedIn: 'root' })
export class OrderService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Order[]>(baseUrl);
    }

    getMyOrders() {
        return this.http.get<Order[]>(`${baseUrl}/my-orders`);
    }

    getByRestaurant(restaurantId: number) {
        return this.http.get<Order[]>(`${baseUrl}/restaurant/${restaurantId}`);
    }

    getRiderDeliveries() {
        return this.http.get<Order[]>(`${baseUrl}/rider-deliveries`);
    }

    getAvailableForRiders() {
        return this.http.get<Order[]>(`${baseUrl}/available-for-rider`);
    }

    getById(id: number) {
        return this.http.get<Order>(`${baseUrl}/${id}`);
    }

    create(params: any) {
        return this.http.post<Order>(baseUrl, params);
    }

    updateStatus(id: number, status: string) {
        return this.http.put<Order>(`${baseUrl}/${id}/status`, { status });
    }

    assignRider(id: number, riderAccountId?: number) {
        return this.http.put<Order>(`${baseUrl}/${id}/assign-rider`, { riderAccountId });
    }

    delete(id: number) {
        return this.http.delete(`${baseUrl}/${id}`);
    }
}
