import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OpenweatherService } from './openweather.service';
import { NotificaComponent } from './notifica/notifica.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificaComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [OpenweatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
