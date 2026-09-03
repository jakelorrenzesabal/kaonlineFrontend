import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Delivery } from '@app/_models';

const baseUrl = `${environment.apiUrl}/deliveries`;

@Injectable({ providedIn: 'root' })
export class DeliveryService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Delivery[]>(baseUrl);
    }

    getByOrderId(orderId: number) {
        return this.http.get<Delivery>(`${baseUrl}/order/${orderId}`);
    }

    update(id: number, params: any) {
        return this.http.put<Delivery>(`${baseUrl}/${id}`, params);
    }
}
