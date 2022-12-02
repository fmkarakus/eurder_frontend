import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Item} from "../model/item";
import {ItemService} from "../service/item.service";

@Component({
  selector: 'app-item-overview',
  templateUrl: './item-overview.component.html',
  styleUrls: ['./item-overview.component.css']
})
export class ItemOverviewComponent implements OnInit {
  items$!: Observable<Item[]>;
  searchText: string;
  constructor(private itemService: ItemService) {
    this.searchText = ""
  }

  getItems(): void {
    this.items$= this.itemService.getItems()
  }

  getIcon(stock: string):any{
   if(stock==="STOCK_HIGH") return "assets/img/warning-icon-green.png"
   if(stock==="STOCK_MEDIUM") return "assets/img/warning-icon-orange.png"
   if(stock==="STOCK_LOW") return "assets/img/warning-icon-red.png"
  }

  ngOnInit(): void {
    this.getItems();
  }
}
