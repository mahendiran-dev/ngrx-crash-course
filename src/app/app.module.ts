import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductComponent } from './Components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmpComponent } from './Components/create-emp/create-emp.component';
import { ViewEmpComponent } from './Components/view-emp/view-emp.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignalComponent } from './Components/signals/signal/signal.component';
import { ObservableComponent } from './Components/observable/observable.component';
import { SwitchMapComponent } from './Components/RXJS/switch-map/switch-map.component';
import { CancelPreApiCallComponent } from './Components/RXJS/switch-map/cancel-pre-api-call/cancel-pre-api-call.component';
import { GuardComponent } from './core/guard/guard/guard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CreateEmpComponent,
    ViewEmpComponent,
    SignalComponent,
    ObservableComponent,
    SwitchMapComponent,
    CancelPreApiCallComponent,
    GuardComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule, AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
