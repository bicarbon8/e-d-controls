import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CardData } from './card-data';

@Component({
  selector: 'app-tab-card',
  templateUrl: './tab-card.component.html',
  styleUrls: ['./tab-card.component.css']
})
export class TabCardComponent {
  @Input() data: CardData;
}
