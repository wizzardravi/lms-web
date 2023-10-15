import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(public authService: AuthService, private router:Router){
    }
    
    user = this.authService.afAuth.user;
ngOnInit(): void {
}

validateLogin():void{
  this.authService.GoogleAuth().then(userData =>
    {
      console.log(userData);
      this.router.navigateByUrl('home');
    } );

}

}
