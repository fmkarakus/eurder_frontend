import { Component } from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import { Location } from '@angular/common';
import {ItemService} from "../service/item.service";
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private location:Location) { }

  cancel(form: NgForm) {
      form.reset()
  }

  goBack() {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    this.itemService.addItem(form.value)
      .subscribe(data => {
        console.log(data);
        form.reset();
        this.itemService.getItems();
      })
  }
}
