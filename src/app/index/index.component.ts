import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../_service/menu.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  data:string[]=[];
  constructor(private router:Router,private menuservice:MenuService) { }

  ngOnInit() {
    //console.log(this.router.url);
    this.menuservice.getmenu()
    .subscribe(myvalue => {
      console.log(myvalue);

     if(myvalue.status){
        this.data = myvalue.data; 
      }
    });
  }

}
