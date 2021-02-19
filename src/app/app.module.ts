import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ShipTabComponent } from './ship-tab/ship-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    FileUploadComponent,
    ShipTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
