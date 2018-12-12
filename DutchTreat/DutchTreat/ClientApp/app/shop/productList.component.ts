import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Observable } from "rxjs";
import { Product } from '../shared/Products';



@Component({

    selector: "product-list",
    templateUrl: "productList.component.html",
    styleUrls:["productList.component.css"]
    
})


export class productList implements OnInit {

    public products: Product[];
    
   
    constructor(private data: DataService) {
        this.products = data.products;
    }
    
    

    ngOnInit() {            
        let ddd = this.data.loadProducts()
            .subscribe((data: Product[]) => this.products = data);


        
        
    }

    addProduct(product: Product) {
        this.data.AddToOrder(product);
    }
}