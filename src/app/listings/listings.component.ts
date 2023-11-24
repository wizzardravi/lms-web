import { Component, OnInit } from '@angular/core';
import { Listing } from '../interfaces';
import { fakeListings } from '../listingsdata';
import { ListingService } from '../listing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})


export class ListingsComponent implements OnInit {
  listings! : Listing[];
constructor(private listingService:ListingService){

}

ngOnInit(): void {
  // this.listingService.getListings().subscribe(
  //   listings => console.log('listings  ' + listings),
  //   err => console.error('Observer got an error: ' + err),
  //   () => console.log('Observer got a complete notification')
  //   );
  this.listingService.getListings().subscribe(
    listings => {
      console.log(listings);
this.listings = listings;
console.log('listings Data ' + this.listings);

    });

 //this.listingService.getListingsForUser();
    

    // subscribe(
    //   x => console.log('Observer got a next value: ' + x),
    //   err => console.error('Observer got an error: ' + err),
    //   () => console.log('Observer got a complete notification')
    // );

    //this.listings = fakeListings;
}

}
