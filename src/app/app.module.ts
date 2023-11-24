import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { MyListingsComponent } from './my-listings/my-listings.component';
import { EditListingComponent } from './edit-listing/edit-listing.component';
import { CreateListingComponent } from './create-listing/create-listing.component';
import { CreateQuestionnaireComponent } from './create-questionnaire/create-questionnaire.component';
import { QuestionnaireDetailsComponent } from './questionnaire-details/questionnaire-details.component';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { CreateQuestionnaireDetailsComponent } from './create-questionnaire-details/create-questionnaire-details.component';
import { CreateQuestionnaireDetOpsComponent } from './create-questionnaire-det-ops/create-questionnaire-det-ops.component';
import { LoginComponent } from './login/login.component';
import { OpenAiComponentComponent } from './open-ai-component/open-ai-component.component';

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
    QuestionnaireDetailsComponent,
    HomeComponent,
    CreateQuestionnaireDetailsComponent,
    CreateQuestionnaireDetOpsComponent,
    LoginComponent,
    OpenAiComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
