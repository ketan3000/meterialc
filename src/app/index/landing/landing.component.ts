import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { 

    
  }

  toggleTitle(){
    $('.title').slideToggle(); //
  }

  ngOnInit() {
    document.body.classList.remove('bg-img');
    document.body.classList.remove('bg-img-signup');
  }

}
