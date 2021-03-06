import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APP_BASE_HREF } from '@angular/common';

import { productList } from "./shop/productList.component";
import { Cart } from "./shop/cart.component"

import { DataService } from "./shared/dataService";
import { Shop } from './shop/shop.component';
import { Checkout } from './Checkout/checkout.component';
import { Login } from './login/login.component';





@NgModule({
  declarations: [
      AppComponent,
      productList,
      Cart,
      Shop,
      Checkout,
      Login
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
    
  ],
    providers: [
        {
            provide: APP_BASE_HREF, useValue: '/'
        },
        DataService
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
