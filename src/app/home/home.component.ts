import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _route: Router) { }

  ngOnInit() {
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this._route.navigate(['/login']);
}

}
