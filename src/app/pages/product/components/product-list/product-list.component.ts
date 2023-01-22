import Product from '@/interfaces/product';
import { ProductService } from '@/services/product/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
    @Input() products: Product[] = []; // entry value
    @Output() deleteProductEvent = new EventEmitter();

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService
            .getData()
            .subscribe((data) => (this.products = data));
    }

    deleteProduct(productId: number) {
        console.log('id:>>', productId);
        this.productService
            .deleteData(productId)
            .subscribe((data) => console.log(data));
        const afterDeleted = this.products.filter(
            (item) => item.id !== productId
        );

        this.deleteProductEvent.emit(afterDeleted);
    }

    ratingProduct(event: any, productId: number) {
        const updatedRating = event.value;
        this.productService
            .rateProduct(productId, updatedRating)
            .subscribe((data) => {
                console.log('updated data:>>>>>>', data);
                alert(`This product has been rated with ${event.value} stars!`);
            });
    }
}
