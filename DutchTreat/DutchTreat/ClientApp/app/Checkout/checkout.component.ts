import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';

@Component({
  selector: "checkout",
  templateUrl: "checkout.component.html",
  styleUrls: ['checkout.component.css']
})
export class Checkout {

    constructor(public data: DataService, private route: Router) {
    }
    errorMsg: string = "";

  onCheckout() {
   
      this.data.checkout()
          .subscribe(success => {
              if (success) {
                  this.route.navigate(["/"]);
              }
              
          }, err => this.errorMsg = "Failed to save order");
  }
}