import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';


@Component({
    selector: "the-cart",
    templateUrl: "cart.component.html",
    styles:[]


})

export class Cart {
    constructor(public data: DataService, private route: Router) {
    }

    onCheckout() {
        if (this.data.loginRequired) {
            this.route.navigate(["login"]);
        }
        else {
            this.route.navigate(["checkout"]);

        }
    
    }

}



