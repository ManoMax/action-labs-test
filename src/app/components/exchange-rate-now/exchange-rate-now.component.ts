import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rate-now',
  templateUrl: './exchange-rate-now.component.html',
  styleUrls: ['./exchange-rate-now.component.css'],
})
export class ExchangeRateNowComponent {
  @Input() currencyValue: Number = 0;
  @Input() showedCurrency: string = '';
  @Input() lastUpdatedAt: string = '';
}
