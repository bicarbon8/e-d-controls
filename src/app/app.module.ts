import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ShipTabComponent } from './tabs/ship-tab/ship-tab.component';
import { SrvTabComponent } from './tabs/srv-tab/srv-tab.component';
import { TabCardComponent } from './tabs/tab-card/tab-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    FileUploadComponent,
    ShipTabComponent,
    SrvTabComponent,
    TabCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
