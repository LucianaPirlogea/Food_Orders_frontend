import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: 'Restaurants',
    canActivate: [AuthGuard],
    children:[
      {
        path: 'Restaurants',
        redirectTo: '',
      },
      {
        path: '',
        loadChildren: () => import('src/app/modules/restaurants/restaurants.module').then(m => m.RestaurantsModule),
      },
    ]
  },
  /*{
    path: 'Restaurants',
    loadChildren: () => import('src/app/modules/restaurants/restaurants.module').then(m => m.RestaurantsModule),
  },*/
  {
    path: '',
    loadChildren: () => import('src/app/modules/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('src/app/modules/auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
