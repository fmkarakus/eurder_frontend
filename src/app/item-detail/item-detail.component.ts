import {Component} from '@angular/core';
import {mergeMap, Observable} from "rxjs";
import {ItemService} from "../service/item.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Item} from "../model/item";
import {FormBuilder} from '@angular/forms';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent {
  item$!: Observable<Item>;
  item!: Item
  isReadOnly!: boolean
  updateItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    amountOfStock: '',
  })
  buttonName!: string;
  private selectedId!: string | null;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder
  ) {
    this.isReadOnly = true
    this.buttonName = 'Edit'
  }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    this.item$ = this.route.paramMap.pipe(
      mergeMap(params => this.itemService.getItemById(params.get('id')))
    )
  }

  onSubmit() {
    if (this.buttonName === 'Edit') {
      this.isReadOnly = false
      this.buttonName = 'Save'
      return
    }
    if (this.buttonName === 'Save') {
      this.itemService.updateItem(this.updateItemForm.value, this.selectedId)
        .subscribe(data => {
          this.itemService.getItems();
          window.location.reload();
        })
    }
  }

}
