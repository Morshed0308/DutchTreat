import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shop } from "./shop/shop.component";
import { Checkout } from "./Checkout/checkout.component";
import { Login } from './login/login.component';




const routes: Routes = [
    { path: "", component: Shop },
    { path: "Checkout", component: Checkout },
    { path: "login", component: Login }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false

    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
