import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockUrgency'
})
export class StockUrgencyPipe implements PipeTransform {

  transform(stockUrgency: string): string {
    switch (stockUrgency) {
      case 'STOCK_LOW':
        return 'Low';
      case 'STOCK_MEDIUM':
        return 'Medium';
      default:
        return 'High'
    }
  }
}
