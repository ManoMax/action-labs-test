import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
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
