import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../_service/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: string[] = [];
  constructor(private _route: Router, private menuservice: MenuService) { }

  //private router:Router



  ngOnInit() {
    //console.log(this.router.url);
    this.menuservice.getmenu()
      .subscribe(myvalue => {
        console.log(myvalue);

        if (myvalue.status) {
          this.data = myvalue.data;
        }
      });
  }

  menu(category:string) {   
    this._route.navigate(['/home/products',category]);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this._route.navigate(['/login']);
  }

}
