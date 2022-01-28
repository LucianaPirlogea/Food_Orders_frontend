import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { MatTableModule } from '@angular/material/table';
import { RestaurantComponent } from './restaurant/restaurant.component';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MarksPipe } from 'src/app/marks.pipe';
import { ComandaComponent } from './comanda/comanda.component';


@NgModule({
  declarations: [
    RestaurantsComponent,
    RestaurantComponent,
    MarksPipe,
    ComandaComponent
  ],
  imports: [
    CommonModule,
    RestaurantsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSelectModule,
    MatListModule,
    MatCardModule
  ],
  exports: [
    MarksPipe
  ]
})
export class RestaurantsModule { }
