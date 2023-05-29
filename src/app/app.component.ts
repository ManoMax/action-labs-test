import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  title = 'action-labs';

  displayBasicInfo: boolean = false;
  viewMoreInfo: boolean = false;
  currencyType: string = '';
  lastUpdatedDate: string = '';
  currencyValue: Number = 0;

  dailys: any = [];

  onCurrencyTypeIsUpdated(event: string) {
    this.currencyType = event;
  }

  onCurrencyValueIsEmited(event: Number) {
    this.currencyValue = event;
  }

  onLastUpdatedDateIsEmited(event: string) {
    this.lastUpdatedDate = event;
  }

  onDisplayIsTrue(event: boolean) {
    this.displayBasicInfo = event;
  }

  onDailysIsEmited(event: any) {
    this.dailys = event;
  }

  onViewMoreInfoIsEmited(event: boolean) {
    this.viewMoreInfo = event;
  }
}
