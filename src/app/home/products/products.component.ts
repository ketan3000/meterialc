import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../_service/auth.service';
import { ProductService } from '../../_service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit,OnDestroy {
  productname: string = ""
  data:string[]=[];
  current_page:number;
  total:number;
  userSubscription;
  public loading = false;
  constructor(private activeRoute: ActivatedRoute,private authservice:AuthService,private productServ:ProductService ) {
    console.log(activeRoute);
    
  }
  ngOnInit() {
    
    console.log("sdf4e444")
    //this.productname = this.activeRoute.snapshot.params['categoryname'];
    //this.authservice.isValidTokenPage();
    this.userSubscription = this.activeRoute.params.subscribe((params: Params) => {
      this.productname = params.categoryname;
    });
    
  }

  

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
