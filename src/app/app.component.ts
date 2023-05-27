import { Component } from '@angular/core';

interface Currency {
  acronym: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  title = 'action-labs';

  currencyTypes: Currency[] = [
    { acronym: 'USD', name: 'US dollar' },
    { acronym: 'EUR', name: 'Euro' },
    { acronym: 'GBP', name: 'british pounds' },
    { acronym: 'JPY', name: 'japanese yen' },
    { acronym: 'CAD', name: 'canadian dollar' },
  ];

  display: boolean = false;
  currencyType: string = '';
  showedCurrency: string = '';
  lastUpdatedAt: string = '';
  currencyValue: Number = 0;

  displayInfos() {
    this.currencyType !== '' ? this.fetchAndSetInfos() : null;
  }

  fetchAndSetInfos() {
    (() => {
      fetch(
        `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${this.currencyType}&to_symbol=BRL`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setDatas(data);
          this.display = true;
        })
        .catch((error) => {
          console.error('Request error: ', error);
        });
    })();
  }

  setDatas(data: any) {
    this.currencyValue = data.exchangeRate.toString().replace('.', ',');
    this.showedCurrency = this.currencyType;
    this.lastUpdatedAt = this.getFormatedDate(data);
  }

  changeCurrencyType(currencyType: string) {
    currencyType !== null ? (this.currencyType = currencyType) : null;
  }

  getFormatedDate(data: any): string {
    let lastUpdatedAt = new Date(data.lastUpdatedAt);
    let day =
      lastUpdatedAt.getDate() <= 10
        ? `0${lastUpdatedAt.getDate()}`
        : lastUpdatedAt.getDate();
    let mouth =
      lastUpdatedAt.getMonth() + 1 <= 10
        ? `0${lastUpdatedAt.getMonth() + 1}`
        : lastUpdatedAt.getMonth() + 1;
    let hours =
      lastUpdatedAt.getHours() <= 10
        ? `0${lastUpdatedAt.getHours()}`
        : lastUpdatedAt.getHours();
    let minutes =
      lastUpdatedAt.getMinutes() <= 10
        ? `0${lastUpdatedAt.getMinutes()}`
        : lastUpdatedAt.getMinutes();

    return `${day}/${mouth}/${lastUpdatedAt.getFullYear()} - ${hours}h${minutes}`;
  }
}
