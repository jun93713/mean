import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { ProductService } from "./product.service"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductNewComponent } from './product-new/product-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule, // <-- Include module in our AppModules
      HttpModule // <-- Include module in our AppModules
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
