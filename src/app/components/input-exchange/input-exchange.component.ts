import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Currency {
  acronym: string;
  name: string;
}

@Component({
  selector: 'app-input-exchange',
  templateUrl: './input-exchange.component.html',
  styleUrls: ['./input-exchange.component.css'],
})
export class InputExchangeComponent {
  currencyTypes: Currency[] = [
    { acronym: 'USD', name: 'US dollar' },
    { acronym: 'EUR', name: 'Euro' },
    { acronym: 'GBP', name: 'british pounds' },
    { acronym: 'JPY', name: 'japanese yen' },
    { acronym: 'CAD', name: 'canadian dollar' },
  ];

  currencyType: string = '';
  @Output() showedCurrencyType = new EventEmitter<string>();

  @Output() currencyValue = new EventEmitter<Number>();

  @Output() lastUpdatedDate = new EventEmitter<string>();

  @Output() showDisplayWithTrue = new EventEmitter<boolean>();

  changeCurrencyType(currencyType: string) {
    currencyType !== null ? (this.currencyType = currencyType) : null;
  }

  getSetAndDisplayInfos() {
    this.currencyType !== '' ? this.fetchAndSetInfos() : null;
  }

  fetchAndSetInfos() {
    (() => {
      fetch(
        `https://api-brl-exchange.actionlabs.com.br/api/1.0/open/currentExchangeRate?apiKey=RVZG0GHEV2KORLNA&from_symbol=${this.currencyType}&to_symbol=BRL`
      )
        .then((res) => res.json())
        .then((data) => {
          this.currencyTypeOutputEmit();
          this.currencyValueOutputEmit(data);
          this.lastUpdatedDataOutputEmit(data);
          this.displayValueOutputEmit();
        })
        .catch((error) => {
          console.error('Request error: ', error);
        });
    })();
  }

  currencyTypeOutputEmit() {
    this.showedCurrencyType.emit(this.currencyType);
  }

  currencyValueOutputEmit(data: any) {
    this.currencyValue.emit(
      data.exchangeRate.toFixed(2).toString().replace('.', ',')
    );
  }

  lastUpdatedDataOutputEmit(data: any) {
    this.lastUpdatedDate.emit(this.getFormatedDate(data.lastUpdatedAt));
  }

  displayValueOutputEmit() {
    this.showDisplayWithTrue.emit(true);
  }

  getFormatedDate(data: string): string {
    let lastUpdatedAt = new Date(data);
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
