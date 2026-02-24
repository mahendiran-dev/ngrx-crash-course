import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalComponent } from './Components/signals/signal/signal.component';
import { HeaderComponent } from './Components/header/header.component';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './Components/create-emp/create-emp.component';
import { SwitchMapComponent } from './Components/RXJS/switch-map/switch-map.component';
import { CancelPreApiCallComponent } from './Components/RXJS/switch-map/cancel-pre-api-call/cancel-pre-api-call.component';
import { GuardComponent } from './core/guard/guard/guard.component';
import { ViewEmpComponent } from './Components/view-emp/view-emp.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent }, { path: 'view-emp', component: ViewEmpComponent },
  {
    path: 'switch-map', component: SwitchMapComponent,
  },
  {
    path: 'cancel-api-call', component: CancelPreApiCallComponent,
  }, {
    path: 'signal', component: SignalComponent,
  }, {
    path: 'guard', component: GuardComponent,
  },
  {
    path: 'home', component: CreateEmpComponent,
  }, {
    path: 'users/:id', component: ViewEmpComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
