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
  brand: string[] = [];
  category: string[] = [];
  filterBrandArr = [];
  current_page: number;
  total: number;
  userSubscription;
  public loading = false;
  constructor(private activeRoute: ActivatedRoute, private authservice: AuthService, private productServ: ProductService) {
    this.productname = this.activeRoute.snapshot.params['categoryname'];

    this.userSubscription = activeRoute.params.subscribe(params => {
      this.productname = params.categoryname;
      this.allProductDetails(1,"");
    });

  }
  ngOnInit() {

  }

  allProductDetails(page: number,brand:string) {
    this.loading = true;
    this.productServ.getAllProducts(page, this.productname,brand)
      .subscribe(result => {
        this.loading = false;
        this.data = result.data;
        this.current_page = page;
        this.total = result.meta.items;
        this.brand = result.meta.filters[1].brand;
        this.category = result.meta.filters[2].category;                  
      })
  }

  selectBrand(itemArr, event) {

    //console.log(itemArr,event);
    if (event.target.checked) {
      this.filterBrandArr.push(itemArr.filter);
    } else {
      let index = this.filterBrandArr.indexOf(itemArr.filter);
      this.filterBrandArr.splice(index, 1);
    }
    var brand = this.filterBrandArr.join('|');
    this.allProductDetails(1,brand);
    

  }



  




  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
