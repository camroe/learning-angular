import {Component, OnInit} from '@angular/core';
import {CompanyService} from './services/company/company.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'avtech-log-ui';
  company;

  constructor(private companyService: CompanyService) {
  }

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit');
    this.company = this.companyService.getCompany();
    console.log(this.company);
  }
}
