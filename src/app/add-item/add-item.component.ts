import { Component,OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'
import { DataService } from "../service/data.service";

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.scss'],
  })
export class AddItemComponent implements OnInit {

    addItemForm:FormGroup;
    url = '';

    constructor(public fb: FormBuilder,public dataService: DataService) {}

        

    ngOnInit(): void {
       this.addItemForm = this.fb.group({
            description: [""],
            title: [""],
            content: [""],
            url: this.url,
        })
    }

    additem() {
        this.dataService.data$.next([
        ...this.dataService.data$.value,
        this.addItemForm.value]);
    }

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
    
          reader.readAsDataURL(event.target.files[0]);
    
          reader.onload = (event) => {
            this.url = event.target.result as string;
            
          }
        }
      }
}