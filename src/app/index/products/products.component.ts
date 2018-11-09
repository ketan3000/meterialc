import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../_service/auth.service';
import { ProductService } from '../../_service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  productname: string = ""
  data: string[] = [];
  current_page: number;
  total: number;
  userSubscription;
  public loading = false;
  constructor(private activeRoute: ActivatedRoute, private authservice: AuthService, private productServ: ProductService) {
    console.log(activeRoute);
    activeRoute.params.subscribe(params => {
      this.productname = params.categoryname;
      this.allProductDetails(1);
    });

  }
  ngOnInit() {


    this.productname = this.activeRoute.snapshot.params['categoryname'];
    //this.authservice.isValidTokenPage();
    this.userSubscription = this.activeRoute.params.subscribe((params: Params) => {
      this.productname = params.categoryname;
    })


    this.allProductDetails(1);

  }

  allProductDetails(page: number) {

    this.loading = true;
    this.productServ.getAllProducts(page, this.productname)
      .subscribe(result => {
        this.loading = false;
        this.data = result.data;
        this.current_page = page;
        this.total = result.meta.items;
        //console.log(result);            
      })
  }


  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
