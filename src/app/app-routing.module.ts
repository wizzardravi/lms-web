import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';

const routes: Routes = [
  {path: 'listings', component: ListingsComponent, pathMatch:'full'},
  {path: 'listings/:id', component: ListingDetailsComponent},
  {path: 'questionnaire/:id', component: QuestionnaireComponent},
  {path: 'create-listings', component: CreateListingComponent},
  {path: 'edit-listing/:id', component: EditListingComponent},
  {path: 'my-listings', component: MyListingsComponent},
  {path: 'questionnaire-details/:id', component: QuestionnaireDetailsComponent},
  {path: 'listings/:id', component: ListingsComponent},
  {path: 'create-questionnaire', component: CreateQuestionnaireComponent},
  {path:'', redirectTo: '/listings', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
