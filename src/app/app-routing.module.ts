import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductComponent } from './pages/product/product.component';
import { RouterOutlet } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    { path: 'product', component: ProductComponent, title: 'product' },
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
