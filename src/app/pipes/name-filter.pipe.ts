import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/item";

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(items: Item[] | null, searchText: string): any[] {
    if (items == null) return [];
    return items.filter(item => item.name.toLowerCase().startsWith(searchText.toLowerCase()));
  }

}
