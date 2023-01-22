import Product from '@/interfaces/product';
import { ProductService } from '@/services/product/product.service';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
})
export class ProductComponent {
    productList: Product[] = [];

    constructor(private productService: ProductService) {}
    ngOnInit() {
        this.productService
            .getData()
            .subscribe((data) => (this.productList = data));
    }
    // hàm này sẽ bắt sự kiên mà component con bắn lên và update lại state và truyền xuống component con nhận state tương ứng
    onGetSearchResult(res: Product[]) {
        this.productList = res;
    }
    onDeleteProduct(data: Product[]) {
        // this.deleteProductEvent.emit(productId);
        this.productList = data;
    }
}
