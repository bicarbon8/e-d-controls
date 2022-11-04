import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EDControlsModule } from './e-d-controls/e-d-controls.module';
import { APP_BASE_HREF } from '@angular/common';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EDControlsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : `${environment.baseHref}` }],
  bootstrap: [AppComponent]
})
export class AppModule { }
