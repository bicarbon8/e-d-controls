import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EDControlsModule } from './e-d-controls/e-d-controls.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EDControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
