import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Payment } from '@app/_models';

const baseUrl = `${environment.apiUrl}/payments`;

@Injectable({ providedIn: 'root' })
export class PaymentService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Payment[]>(baseUrl);
    }

    getByOrderId(orderId: number) {
        return this.http.get<Payment>(`${baseUrl}/order/${orderId}`);
    }

    updateStatus(id: number, paymentStatus: string) {
        return this.http.put<Payment>(`${baseUrl}/${id}/status`, { paymentStatus });
    }
}
