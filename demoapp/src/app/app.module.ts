import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElemntComponent } from './server-elemnt/server-elemnt.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElemntComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
