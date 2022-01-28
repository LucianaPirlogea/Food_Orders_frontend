import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit, OnDestroy {

  public subscriptionLog: Subscription = new Subscription;
  public loggedUser: any;
  public subscription: Subscription = new Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.subscriptionLog = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public logout(): void{
    localStorage.setItem('Role', 'Anonim');
    this.router.navigate(['/Login']);
  }

}
