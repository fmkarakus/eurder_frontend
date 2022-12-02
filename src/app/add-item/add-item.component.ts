import {Component, OnInit} from '@angular/core';
import {FormBuilder, NgForm} from "@angular/forms";
import { Location } from '@angular/common';
import {ItemService} from "../service/item.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit{
  public value = "";
  public maxlength = 255;
  public charactersCount!: number;
  public counter!: string;
  createItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price:0,
    amountOfStock:0
  });
  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private location:Location, private router: Router) { }

  cancel() {
    this.createItemForm.reset();
    this.onValueChange("")
  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
    console.log(this.createItemForm.value)
    this.itemService.addItem(this.createItemForm.value)
      .subscribe(data => {
        console.log(data);
        this.createItemForm.reset();
        this.router.navigateByUrl(`items/${data.id}`)
      })
  }

  ngOnInit(): void {
    this.charactersCount = this.value ? this.value.length : 0;
    this.counter = `${this.charactersCount}/${this.maxlength}`;
  }

  public onValueChange(ev: string): void {
    this.charactersCount = ev.length;
    this.counter = `${this.charactersCount}/${this.maxlength}`;
  }
}
