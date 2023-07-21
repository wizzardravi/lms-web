import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingDetailsComponent,
    QuestionnaireComponent,
    MyListingsComponent,
    EditListingComponent,
    CreateListingComponent,
    CreateQuestionnaireComponent,
    QuestionnaireDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
