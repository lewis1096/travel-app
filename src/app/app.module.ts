import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [		
    AppComponent,
      TravelRequestComponent,
      AboutComponent
   ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }








