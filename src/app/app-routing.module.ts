import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {AddItemComponent} from "./add-item/add-item.component";

const routes: Routes = [
  {path:'', component: ItemOverviewComponent},
  {path:'items/add', component: AddItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
