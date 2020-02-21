import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  // This allows the product alert component to emit an event when the value of the notify property changes.
  @Output() notify = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
