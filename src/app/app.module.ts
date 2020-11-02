import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [

  {path: 'flightdetails', component:TravelRequestComponent},
  {path: 'about', component:AboutComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
      TravelRequestComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }








