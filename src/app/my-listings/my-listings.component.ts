import { Component, OnInit } from '@angular/core';
import { ListingService } from '../listing.service';
import { Observable } from 'rxjs';
import { Listing } from '../interfaces';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-my-listings',
  templateUrl: './my-listings.component.html',
  styleUrls: ['./my-listings.component.css']
})
export class MyListingsComponent implements OnInit {
id!:string;
listings! : Listing[];
  constructor(private listingService:ListingService, private auth: AngularFireAuth, private http:HttpClient){

  }

  ngOnInit(): void {
    this.listingService.getListingsForUser().subscribe(listings => {
      this.listings = listings;
    })
  }



}
