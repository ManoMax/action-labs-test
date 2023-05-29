import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-more-info-button',
  templateUrl: './more-info-button.component.html',
  styleUrls: ['./more-info-button.component.css'],
})
export class MoreInfoButtonComponent {
  @Input() currencyType: string = '';

  @Output() dailys = new EventEmitter<string>();
  currentViewStatus: boolean = false;
  @Output() viewMoreInfo = new EventEmitter<boolean>();

  setMoreInfoView() {
    this.getAndSetDailyExchangeRate();
  }

  getAndSetDailyExchangeRate() {
    (() => {
      fetch(
        `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/dailyExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${this.currencyType}&to_symbol=BRL`
      )
        .then((res) => res.json())
        .then((data) => {
          this.dailysOutputEmit(data);
          this.viewMoreInfoOutputEmit();
        })
        .catch((error) => {
          console.error('Request error: ', error);
        });
    })();
  }
  viewMoreInfoOutputEmit() {
    this.currentViewStatus = !this.currentViewStatus;
    this.viewMoreInfo.emit(this.currentViewStatus);
  }

  dailysOutputEmit(data: any) {
    this.dailys.emit(data.data.splice(0, 30));
  }
}
