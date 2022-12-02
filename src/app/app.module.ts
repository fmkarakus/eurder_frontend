import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from "./layout/layout.module";
import { ItemOverviewComponent } from './item-overview/item-overview.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { StockUrgencyPipe } from './pipes/stock-urgency.pipe';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemOverviewComponent,
    NameFilterPipe,
    StockUrgencyPipe,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
