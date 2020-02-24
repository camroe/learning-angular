import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  // @Input : This indicates that this property is to be provided to the
  // component by a parent component passing it to the summary. Properties are bound to
  // an element using an attribute, as you can see here—this example will set the value of
  // stockData of the parent component in the stock property of the Summary component:
  //   <summary [stock]="stockData"></summary>
  @Input() stock: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  isNegative() {
    return (this.stock && this.stock.change < 0);
  }

  isPositive() {
    return (this.stock && this.stock.change > 0);
  }

}
