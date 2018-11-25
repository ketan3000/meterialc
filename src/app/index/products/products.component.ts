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
  selectBrands: string[] = [];
  public loading = false;
  constructor(private activeRoute: ActivatedRoute, private _route: Router, private authservice: AuthService, private productServ: ProductService) {
    this.productname = this.activeRoute.snapshot.params['categoryname'];

    this.selectBrands = JSON.parse(this.activeRoute.snapshot.queryParamMap.get('brands'));
    activeRoute.queryParams.subscribe(queryParams => {
      if (queryParams['brands']) {
        this.selectBrands = JSON.parse(queryParams['brands']);
      } else {
        this.selectBrands = [];
      }

    });



    this.userSubscription = activeRoute.params.subscribe(params => {    
      this.productname = params.categoryname;
      this.allProductDetails(1, this.selectBrands);
    });

  }
  ngOnInit() {


  }

  allProductDetails(page: number, brand: string[]) {
    var brandnew = brand.join('|');
    this.loading = true;
    this.productServ.getAllProducts(page, this.productname, brandnew)
      .subscribe(result => {
        this.loading = false;
        this.data = result.data;

       /*var xxxx =  result.data.reduce(function(results, value, index, array) {          
          results.push(array.slice(index, index + 4));
          return results;
        }, []);*/
        
        

        this.current_page = page;
        this.total = result.meta.items;
        this.brand = result.meta.filters[1].brand;
        this.category = result.meta.filters[2].category;
      })
  }

  selectBrand(itemArr, event) {

    //console.log(itemArr,event);
    if (event.target.checked) {
      this.selectBrands.push(itemArr.filter);
    } else {
      let index = this.selectBrands.indexOf(itemArr.filter);
      this.selectBrands.splice(index, 1);
    }
    this._route.navigate(['/products', this.productname], { queryParams: { brands: JSON.stringify(this.selectBrands) } });
    //var brand12 = this.filterBrandArr.join('|');
    this.allProductDetails(1, this.selectBrands);

  }

  details(productId: string, param2: string) {
    this._route.navigate(['/details', productId]);
  }





  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }


}
