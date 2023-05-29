import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMaterialModule } from './app.material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DailyInformationCardsComponent } from './components/daily-information-cards/daily-information-cards.component';
import { MoreInfoButtonComponent } from './components/more-info-button/more-info-button.component';
import { ExchangeRateNowComponent } from './components/exchange-rate-now/exchange-rate-now.component';
import { ActionLabsHeaderComponent } from './components/action-labs-header/action-labs-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyInformationCardsComponent,
    MoreInfoButtonComponent,
    ExchangeRateNowComponent,
    ActionLabsHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
