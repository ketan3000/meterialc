import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../_service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productID: string = "";
  productSubscription;

  product_name: string;
  product_mrp: number;
  product_category: string;
  product_brand: string;
  product_images:string[];
  product_image:string;
  stores:string[];
  available_colors:string[];
  product_ratings:string;  

  constructor(private productServ: ProductService,private activeRoute: ActivatedRoute) {
    this.productID = this.activeRoute.snapshot.params['productid'];
    this.productSubscription = activeRoute.params.subscribe(params => {    
      this.productID  = params.productid;
     
    });

    this.productServ.getPraductDetails(this.productID).subscribe(result=>{
      console.log(result.data.stores);
      this.product_name=result.data.product_name;
      this.product_images=result.data.product_images;      
      this.product_image = result.data.product_image
      this.stores = result.data.stores;
      this.product_mrp=result.data.product_mrp;
      this.product_ratings=result.data.product_ratings;
      this.available_colors=result.data.available_colors;
    });
   }

  ngOnInit() {
    
    
  }



}
