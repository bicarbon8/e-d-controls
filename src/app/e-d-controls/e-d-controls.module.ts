import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MapTabComponent } from './tabs/map-tab/map-tab.component';
import { ShipTabComponent } from './tabs/ship-tab/ship-tab.component';
import { SrvTabComponent } from './tabs/srv-tab/srv-tab.component';
import { TabCardComponent } from './tabs/tab-card/tab-card.component';
import { TabsComponent } from './tabs/tabs.component';
import { EDControlsComponent } from './e-d-controls.component';
import { EDControlsRoutingModule } from './e-d-controls-routing.module';
import { HttpClientModule } from '@angular/common/http';

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
    CommonModule,
    EDControlsRoutingModule,
    HttpClientModule
  ],
  exports: [
    EDControlsComponent
  ]
})
export class EDControlsModule { }
