import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { fakeListings } from '../listingsdata';
import { Listing } from '../interfaces';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit{

  listing: Listing =  { listingId: "1", listingName: "hello", listingStartDate : "",salary:1, listingEndDate: "", isActive : true };
  constructor(private route:ActivatedRoute){
   
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
let list = fakeListings.find(listing => listing.listingId ==  id);
this.listing.listingId = list?.listingId;
this.listing.listingName = list?.listingName;
this.listing.listingDescription = list?.listingDescription;
this.listing.listingStartDate = list?.listingStartDate;
this.listing.listingEndDate = list?.listingEndDate;
this.listing.isActive = list?.isActive;

  }

}
