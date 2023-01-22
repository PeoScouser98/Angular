import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddProductComponent } from './pages/product/subpages/product-add/add-product.component';
import { ProductComponent } from './pages/product/subpages/product-list/product-list.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: 'product',
        component: ProductComponent,
        title: 'product',
    },
    {
        path: 'product-add',
        component: AddProductComponent,
        title: 'product - create new',
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: '404! Page not found',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
