import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luigi Alecce ';

  numOfTravelers:number = 0;
  totalPrice:number = 0;

  calcTotal(): void{
    this.totalPrice = this.numOfTravelers*150;
  }


}




