import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LMS';
  constructor(public authService: AuthService, private router:Router){
    }
user = this.authService.afAuth.user;
ngOnInit(): void {
}

logOut():void{
  this.authService.AuthLogout();
this.router.navigateByUrl('login')
}
}
