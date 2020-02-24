import {Component} from '@angular/core';
import {StockInterface, StockServiceService} from './services/stock-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocks';
  stocks: Array<StockInterface>;

  /*
  Use the service to load and requested stocks ['AAPL'] into the stocks array.
   */
  constructor(service: StockServiceService) {
    service.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }
}
