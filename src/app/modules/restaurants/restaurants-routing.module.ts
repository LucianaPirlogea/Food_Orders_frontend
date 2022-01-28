import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComandaComponent } from './comanda/comanda.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RestaurantsComponent
  },
  {
    path: 'restaurant/:denumire',
    component: RestaurantComponent
  },
  {
    path: 'comanda',
    component: ComandaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
