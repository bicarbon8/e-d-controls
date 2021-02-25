import { Component, OnInit } from '@angular/core';
import { BaseTabComponent } from '../base-tab.component';
import { CardData } from '../tab-card/card-data';

@Component({
  selector: 'app-map-tab',
  templateUrl: './map-tab.component.html',
  styleUrls: ['./map-tab.component.css']
})
export class MapTabComponent extends BaseTabComponent {
  getMasonrySelector(): string {
    return '.map-grid';
  }
  
  getMapControlsData(): CardData {
    return this.getCardData('Map Controls', new Map([
      ['Galaxy Map (Ship)', 'root.galaxymapopen'],
      ['Galaxy Map (SRV)', 'root.galaxymapopen_buggy'],
      ['Hightlight Current System', 'root.galaxymaphome'],
      ['System Map (Ship)', 'root.systemmapopen'],
      ['System Map (SRV)', 'root.systemmapopen_buggy']
    ]));
  }

  getCameraControlsData(): CardData {
    return this.getCardData('Camera Controls', new Map([
      ['Camera Pitch', 'root.campitchaxis'],
      ['Camera Pitch Up', 'root.campitchup'],
      ['Camera Pitch Down', 'root.campitchdown'],
      ['Camera Yaw', 'root.camyawaxis'],
      ['Camera Yaw Left', 'root.camyawleft'],
      ['Camera Yaw Right', 'root.camyawright'],
      ['Camera Translate Y-Axis', 'root.camtranslateyaxis'],
      ['Camera Translate Forward', 'root.camtranslateforward'],
      ['Camera Translate Backward', 'root.camtranslatebackward'],
      ['Camera Translate X-Axis', 'root.camtranslatexaxis'],
      ['Camera Translate Left', 'root.camtranslateleft'],
      ['Camera Translate Right', 'root.camtranslateright'],
      ['Camera Translate Z-Axis', 'root.camtranslatezaxis'],
      ['Camera Translate Up', 'root.camtranslateup'],
      ['Camera Translate Down', 'root.camtranslatedown'],
      ['Camera Zoom', 'root.camzoomaxis'],
      ['Camera Zoom In', 'root.camzoomin'],
      ['Camera Zoom Out', 'root.camzoomout'],
      ['Camera Translate Z-Hold', 'root.camtranslatezhold']
    ]));
  }

  getUiControlsData(): CardData {
    return this.getCardData('UI Controls', new Map([
      ['UI Up', 'root.ui_up'],
      ['UI Down', 'root.ui_down'],
      ['UI Left', 'root.ui_left'],
      ['UI Right', 'root.ui_right'],
      ['UI Select', 'root.ui_select'],
      ['UI Back', 'root.ui_back'],
      ['UI Toggle', 'root.ui_toggle'],
      ['Next Panel', 'root.cyclenextpanel'],
      ['Previous Panel', 'root.cyclepreviouspanel'],
      ['Next Page', 'root.cyclenextpage'],
      ['Previous Page', 'root.cyclepreviouspage']
    ]));
  }
}
