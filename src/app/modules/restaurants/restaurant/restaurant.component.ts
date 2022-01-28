import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { RestaurantsService } from 'src/app/services/restaurants.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit, OnDestroy {

  public subscription: Subscription = new Subscription;
  public denumire:any;
  public meniu:any;
  public subscriptionLog: Subscription = new Subscription;
  public loggedUser: any;
 
  constructor(
    private route: ActivatedRoute,
    private restaurantsService: RestaurantsService,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(){
      this.subscriptionLog = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
      this.subscription = this.route.params.subscribe(params => {
      this.denumire = params['denumire']; 
      console.log(this.denumire);
      if (this.denumire){
        this.getRestaurant();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getRestaurant() : void{
      this.restaurantsService.getRestaurantByName(this.denumire).subscribe(
        (result) => {
          console.log(result);
          this.meniu = result;
        },
        (error) => {
          console.error(error);
        }
      );
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/Login']);
  }

  public goToComanda(): void{
    this.router.navigate(['/Restaurants/comanda']);
  }

}
