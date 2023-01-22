import Product from '@/interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}
    getData() {
        return this.http.get<Product[]>('http://localhost:3001/products');
    }
    searchData(keyword: string) {
        return this.http.get<Product[]>(
            `http://localhost:3001/products?name_like=${keyword}`
        );
    }
    deleteData(id: number) {
        return this.http.delete(`http://localhost:3001/products/${id}`);
    }
    rateProduct(id: number, rate: number) {
        console.log(rate);
        return this.http.patch<Pick<Product, 'id' & 'rating'>>(
            `http://localhost:3001/products/${id}`,
            {
                starRating: rate,
            }
        );
    }
}
