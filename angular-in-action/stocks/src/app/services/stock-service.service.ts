import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
const service = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private http: HttpClient) {
  }

  /* Method to get stocks
  * simple method that returns the current value of the stocks array, but it always returns a copy instead of
  * the direct value. This is done to encapsulate the stock values and prevent them frombeing directly modified.
  */
  get() {
    return stocks.slice();
  }

  // Method to add a new stock to list (array)
  // -- remember the array of stocks initialized at the top?
  // adds a new item to the stocks array and returns the newly modified value.
  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  // Method to remove a stock from the array
  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

// Method to call HttpClient service to load stock values from API
  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }
}
