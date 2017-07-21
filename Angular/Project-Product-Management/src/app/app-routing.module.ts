import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component"
import { ProductListComponent } from "./product-list/product-list.component"
import { ProductEditComponent } from "./product-edit/product-edit.component"
import { ProductNewComponent } from "./product-new/product-new.component"

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductListComponent },
    { path: 'product/edit/:id', component: ProductEditComponent},
    { path: 'product/new', component: ProductNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
