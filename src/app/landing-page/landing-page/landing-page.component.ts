import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {

  data = [];

  constructor(private dataService: DataService,
    public dialogRef:MatDialog) {}

  ngOnInit() {
    this.dataService.data$.subscribe((value) => {
      this.data = value;
    });
  }

  favourites = [];

  addToFavourite(datus) {
    this.favourites.push(datus);
    this.dataService.setFavouriteData = this.favourites;

    const dialogRef = this.dialogRef.open(DialogComponent,{
      data:{
        message: 'HelloWorld',
        buttonText: {
          cancel: 'Done'
        }
      },
    });
  }

  deleteItem(i: number): void {
    this.data.splice(i,1);
  }
}