import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

import { counterFeature } from './counter/ngrx/counter.feature';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,

    // NgRx State Management Module
    StoreModule.forRoot({
      ...counterFeature
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
