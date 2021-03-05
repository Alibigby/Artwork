import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  data = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }
}
