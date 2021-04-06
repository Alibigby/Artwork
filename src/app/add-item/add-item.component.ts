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

    constructor(public fb: FormBuilder,public dataService: DataService) {
    }

    ngOnInit(): void {
       this.addItemForm = this.fb.group({
            description: [""],
            title: [""],
            content: [""],
            url: [""],
        })
    }

    additem() {
        this.dataService.data$.next([...this.dataService.data$.value,this.addItemForm.value]);
    }
}