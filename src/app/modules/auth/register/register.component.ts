import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup = new FormGroup({
    Nume : new FormControl(''),
    Prenume : new FormControl(''),
    Email : new FormControl(''),
    Nr_telefon : new FormControl(''),
    adresa1 : new FormControl(''),
    adresa2 : new FormControl(''),
    Password : new FormControl('')
  });

  constructor(
    private router: Router,
    private dataService: DataService,
    public dialog: MatDialog,
    
  ) { }

  get Nume(): AbstractControl {
    return this.registerForm.get('Nume')!;
  }
  get Prenume(): AbstractControl {
    return this.registerForm.get('Prenume')!;
  }
  get Nr_telefon(): AbstractControl {
    return this.registerForm.get('Nr_telefon')!;
  }
  
  get adresa1(): AbstractControl {
    return this.registerForm.get('adresa1')!;
  }
  get adresa2(): AbstractControl {
    return this.registerForm.get('adresa2')!;
  }
  get Email(): AbstractControl {
    return this.registerForm.get('Email')!;
  }
  get Password(): AbstractControl {
    return this.registerForm.get('Password')!;
  }

  ngOnInit(): void {
  }
/*
  public openModal(): void{
      this.dialog.open(RegisterUserComponent);
  }
*/
  public register(): void{
    //this.openModal();
    /*
    this.registerService.registerUser(this.registerForm.value).subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.error(error);
      }
    );*/
    console.log(this.registerForm.value);
    this.dataService.changeUserData(this.registerForm.value);
    localStorage.setItem('Role', 'User');
    this.router.navigate(['Restaurants']);
  }
}
