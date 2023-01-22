import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { ProductComponent } from './pages/product/subpages/product-list/product-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchBarComponent } from './pages/product/components/search-bar/search-bar.component';
import { ProductListComponent } from './pages/product/components/product-list/product-list.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { AddProductComponent } from './pages/product/subpages/product-add/add-product.component';
import { LoadingComponent } from './shared/loading/loading.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ProductComponent,
        NotFoundComponent,
        FooterComponent,
        HomeComponent,
        SearchBarComponent,
        ProductListComponent,
        AddProductComponent,
        LoadingComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatIconModule,
        FormsModule,
        RatingModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
