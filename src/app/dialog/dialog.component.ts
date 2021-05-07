import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageComponent } from '../landing-page/landing-page/landing-page.component';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  lotInfo:FormGroup;
  email:FormGroup;

  message: string = "";
  cancelButtonText = "Cancel";

  
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    private dialogRef: MatDialogRef<DialogComponent> , private fb:FormBuilder,private dataService: DataService) {
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('700vw','700vh')
  }

  ngOnInit() {
    this.lotInfo = this.fb.group({
      AddressCtrl: ["", Validators.required],
      mobileNumberCtrl: ["", Validators.required],
    }),
    this.email = this.fb.group({
      emailCtrl: ["", Validators.required],
    })
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  onSubmit() {
    this.dialogRef.close(true);
  }
}