import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";


@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styles:[]



})




export class Login {
    constructor(private data: DataService, private router: Router) {
    }
    errormsg: string = "";
    public credens = {
        username: "",
        password:""
    };
    onLogin() {
        //alert(this.credens.username);
        this.data.login(this.credens)
         .subscribe(success => {
                if (success) {
                    if (this.data.order.items.length > 0) {
                        this.router.navigate(["Checkout"]);
                    }
                    else {
                        this.router.navigate([""]);
                    }
                } 
            },err=>this.errormsg="Failed to Login")

    }
}