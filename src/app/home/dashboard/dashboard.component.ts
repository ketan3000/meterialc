import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { ProductService } from '../../_service/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private authservice:AuthService,private productServ:ProductService) { }
  base_url = "https://price-api.datayuge.com/api/v1/compare/list/categories?page=1";
  ngOnInit() {
    this.authservice.isValidTokenPage();
    this.categoryPage(this.base_url);
  }

  categoryPage(pageURL:string){
    this.productServ.getAllCategories(pageURL)
    .subscribe(data=>{
      console.log(data);
    })
  }

}
