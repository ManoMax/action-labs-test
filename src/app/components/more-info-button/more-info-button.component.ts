import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-info-button',
  templateUrl: './more-info-button.component.html',
  styleUrls: ['./more-info-button.component.css'],
})
export class MoreInfoButtonComponent {
  @Input() viewMoreInfo: boolean = false;
}
