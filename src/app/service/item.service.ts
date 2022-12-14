import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Item} from "../model/item";
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public _itemsUrl: string;

  constructor(private http: HttpClient) {
    this._itemsUrl = `${environment.backendUrl}/items`
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._itemsUrl)
      .pipe(map(items => items.sort((a: Item, b: Item) => a.name.localeCompare(b.name))))
  }

  addItem(item:any){
    return this.http.post<Item>(this._itemsUrl,item)
  }

  getItemById(id:any) :Observable<any> {
    return this.http.get(this._itemsUrl+"/"+id);
  }

  updateItem(item: any, id: string | null): Observable<any>  {
    return this.http.put(`${this._itemsUrl}/${id}`, item);

  }
}
