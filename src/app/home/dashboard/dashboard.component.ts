import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service';
import { ProductService } from '../../_service/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:string[]=[];
  current_page:number;
  total:number;
  constructor(private authservice:AuthService,private productServ:ProductService) { }
 
  ngOnInit() {
    this.authservice.isValidTokenPage();
    this.categoryPage(1);    
  }
  categoryPage(page:number){
    this.productServ.getAllCategories(page)
    .subscribe(result=>{
      this.data = result.data;
      this.current_page = result.current_page;
      this.total = result.total;
    })
  }

}
