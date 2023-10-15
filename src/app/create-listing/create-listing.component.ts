import { Component, OnInit } from '@angular/core';
import { Listing } from '../interfaces';
import { ListingService } from '../listing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listing',
  templateUrl: './create-listing.component.html',
  styleUrls: ['./create-listing.component.css']
})
export class CreateListingComponent implements OnInit {
  listing: Listing = { listingId: "1", listingName: "hello", listingStartDate : "",minSalary:1, maxSalary:1, listingEndDate: "", isActive : true };
  constructor(private listingService:ListingService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  saveListing(listing:Listing): void{
    this.listingService.saveListings(listing).subscribe(value => {
      console.log('Listing saved -' + value )
      this.router.navigateByUrl('create-questionnaire');
  });

  }

}
