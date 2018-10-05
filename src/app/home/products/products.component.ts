import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categoryname: string = ""
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {

    console.log(this.activeRoute.snapshot.params['categoryname']);

    /*this.activeRoute.params.subscribe((params: Params) => {
      this.categoryname = params.categoryname;
    })*/

    console.log(this.categoryname);
    

  }

}
