import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {

  // favouriteList = [];

  constructor(public dataService: DataService) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.dataService.getFavouriteData.subscribe((value => {
    //   this.favouriteList = value;
    //   console.log(value);
    // }));
    // console.log(this.favouriteList);  
  }
}
