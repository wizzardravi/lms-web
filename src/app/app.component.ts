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
    this.displayname = localStorage.getItem("kb_display_name")!;
    this.photourl = localStorage.getItem("kb_photo_url")!;
    console.log(this.photourl);
    }
    displayname!: string;
    photourl!: string;
user = this.authService.afAuth.user;

ngOnInit(): void {
  
}

logOut():void{
  this.authService.AuthLogout();
  localStorage.removeItem("kb_display_name");
  localStorage.removeItem("kb_photo_url");
  localStorage.removeItem("kb_provider_id");
  localStorage.removeItem("kbUserValid");
  localStorage.removeItem("openkey");
  this.router.navigateByUrl('login');
}
}
