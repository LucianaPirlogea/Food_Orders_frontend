import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Food_Orders';

  constructor(
    private router: Router
  ) { }

  public goToRestaurantMenu(denumire: any): void {
    this.router.navigate(['/Restaurants/restaurant', denumire]);
  }

  public goToRestaurantMenuSearch(): void{
    var val = (<HTMLInputElement>document.getElementById("search")!).value;
    this.goToRestaurantMenu(val);
  }
  
}
