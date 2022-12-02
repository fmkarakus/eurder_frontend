import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemOverviewComponent} from "./item-overview/item-overview.component";
import {RouterModule, Routes} from "@angular/router";
import {AddItemComponent} from "./add-item/add-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";
import {CustomerOverviewComponent} from "./customer-overview/customer-overview.component";

const routes: Routes = [
  {path:'', component: ItemOverviewComponent},
  {path:'items/add', component: AddItemComponent},
  {path: 'items/:id', component: ItemDetailComponent},
  {path:'customers', component:CustomerOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
