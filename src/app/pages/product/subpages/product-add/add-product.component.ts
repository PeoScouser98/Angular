import Product from '@/interfaces/product';
import { ProductService } from '@/services/product/product.service';
import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    NgForm,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
})
export class AddProductComponent {
    constructor(private productService: ProductService) {}

    addProductForm = new FormGroup({
        productName: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
        ]),
        price: new FormControl('', [Validators.required, Validators.min(0)]),

        productCode: new FormControl('', [Validators.required]),
        imageUrl: new FormControl('', [Validators.required]),
        description: new FormControl('', Validators.required),
    });

    onSubmit() {
        const newProduct = this.addProductForm
            .value as unknown as Partial<Product>;
        if (newProduct) {
            this.productService
                .addProduct({
                    releaseDate: new Date().toLocaleDateString(),
                    starRating: 3,
                    ...newProduct,
                })
                .subscribe((data) => {
                    console.log(data);
                    alert('Added new product!');
                    this.addProductForm.reset();
                });
        }
    }
    get form() {
        return this.addProductForm.controls;
    }
}
