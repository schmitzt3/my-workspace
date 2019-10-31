import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibModule } from 'my-lib';
import { MyLibMocksModule } from 'my-lib-mocks';

import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const getServiceModule = () => environment.useMocks ? MyLibMocksModule : MyLibModule;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    getServiceModule()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
