import Product from '@/interfaces/product';
import { ProductService } from '@/services/product/product.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
})
export class SearchBarComponent implements OnInit {
    public searchValue: string = '';

    @Output() searchEvent = new EventEmitter<Product[]>(); // component cha sẽ bắt sự kiện này và xử lý sự kiện
    constructor(private productService: ProductService) {}

    ngOnInit() {}
    handleSearchChange() {
        debounceTime(400);
        this.productService.searchData(this.searchValue).subscribe((data) => {
            this.searchEvent.emit(data);
        });
    }
    onSubmit(f: NgForm) {
        console.log(f.value);
    }
}
