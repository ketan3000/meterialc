import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../_service/home.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  mobile: string[] = [];
  laptop: string[] = [];
  constructor(private homeService: HomeService) {


  }

  toggleTitle() {
    $('.title').slideToggle(); //
  }

  ngOnInit() {
    this.homeService.getLatestData().subscribe(resultsset => {
  
      this.mobile = resultsset[0].data.reduce(function (results, value, index, array) {
        if (index % 4 == 0) {
          results.push(array.slice(index, index + 4));
        }
        return results;

      }, []);
      this.laptop = resultsset[1].data.reduce(function (results, value, index, array) {
        if (index % 4 == 0) {
          results.push(array.slice(index, index + 4));
        }
        return results;

      }, []);
      
      
    });


    document.body.classList.remove('bg-img');
    document.body.classList.remove('bg-img-signup');
  }

}
