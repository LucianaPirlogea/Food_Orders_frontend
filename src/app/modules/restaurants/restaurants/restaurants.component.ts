import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})

export class RestaurantsComponent implements OnInit, OnDestroy {

  public restaurants = [];
  public displayedColumns = ['denumire','meniu', 'tip_pret','specific','tel_mobil','tel_fix','email','site'];
  public subscription: Subscription = new Subscription;
  public loggedUser: any;
  

  constructor(
    private router: Router,
    private restaurantsService: RestaurantsService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.restaurantsService.getAllRestaurants().subscribe(
      (result) => {
        console.log(result);
        this.restaurants = result;
      },
      (error) => {
        console.error(error);
      }
    );

  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  

  
  public goToRestaurantMenu(denumire: any): void {
    this.router.navigate(['/Restaurants/restaurant', denumire]);
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/Login']);
  }

}
