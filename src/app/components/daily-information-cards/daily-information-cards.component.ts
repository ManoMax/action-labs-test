import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-information-cards',
  templateUrl: './daily-information-cards.component.html',
  styleUrls: ['./daily-information-cards.component.css'],
})
export class DailyInformationCardsComponent {
  @Input() dailys: any;
  @Input() viewMoreInfo: boolean = false;

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

    return `${day}/${mouth}/${lastUpdatedAt.getFullYear()}`;
  }
}
