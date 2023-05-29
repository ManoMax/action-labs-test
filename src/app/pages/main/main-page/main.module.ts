import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app.material.module';
import { Routes } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { DailyInformationCardsComponent } from 'src/app/components/daily-information-cards/daily-information-cards.component';
import { MoreInfoButtonComponent } from 'src/app/components/more-info-button/more-info-button.component';
import { ExchangeRateNowComponent } from 'src/app/components/exchange-rate-now/exchange-rate-now.component';
import { ActionLabsHeaderComponent } from 'src/app/components/action-labs-header/action-labs-header.component';
import { InputExchangeComponent } from 'src/app/components/input-exchange/input-exchange.component';

export const MainRoutes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
];

@NgModule({
  declarations: [
    MainPageComponent,
    DailyInformationCardsComponent,
    MoreInfoButtonComponent,
    ExchangeRateNowComponent,
    ActionLabsHeaderComponent,
    InputExchangeComponent,
  ],
  imports: [CommonModule, AppMaterialModule],
  bootstrap: [MainPageComponent],
})
export class MainModule {}
