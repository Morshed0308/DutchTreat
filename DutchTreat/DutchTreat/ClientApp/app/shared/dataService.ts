import { Injectable } from "@angular/core";
import { map, catchError } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Products';
import { throwError } from 'rxjs';
import { Order, OrderItem } from './Order';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public token:string="";
    private tokenExpiration: Date;
    public order: Order = new Order();
    public products: Product[] = [];

    public loadProducts(): Observable<Product[]> {
        let fff = this.http.get('/api/products')
            .pipe(map((data => this.products = data as Product[]),
                catchError(err => throwError(err))));

        return fff;
    }

    public get loginRequired(): boolean {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    public login(credens) {
        return this.http.post("/account/createtoken", credens)
            .pipe(map((data: any) => {
                let tokenInfo = data;
                this.token = tokenInfo.token;
                this.tokenExpiration = tokenInfo.expiration;
                return true;

            })
            );


        //.subscribe((data:any) => {
        //        let tokenInfo = data;
        //        this.token = tokenInfo.token;
        //        this.tokenExpiration = tokenInfo.expiration;
        //        return true;
        //    })
            

    }

    public checkout() {
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((data: any) => {
                this.order = new Order();
                return true;
            })
            );

    }


    public AddToOrder(product: Product) {

        //if (!this.order) {
        //    this.order = new Order();
        //}
        let item: OrderItem = this.order.items.find(i => i.productId == product.id);

        if (item) {
           
        }
        else {
        }

        item = new OrderItem();

        item.productId = product.id;
        item.productArtist = product.artist;
        item.productTitle = product.title;
        item.unitPrice = product.price;
        item.productSize = product.size;
        item.productCategory = product.category;
        


        this.order.items.push(item);

    }


 


}