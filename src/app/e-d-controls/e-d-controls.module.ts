import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MapTabComponent } from './tabs/map-tab/map-tab.component';
import { ShipTabComponent } from './tabs/ship-tab/ship-tab.component';
import { SrvTabComponent } from './tabs/srv-tab/srv-tab.component';
import { TabCardComponent } from './tabs/tab-card/tab-card.component';
import { TabsComponent } from './tabs/tabs.component';
import { EDControlsComponent } from './e-d-controls.component';

@NgModule({
  declarations: [
    TabsComponent,
    FileUploadComponent,
    ShipTabComponent,
    SrvTabComponent,
    TabCardComponent,
    MapTabComponent,
    EDControlsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EDControlsComponent
  ]
})
export class EDControlsModule { }
