import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; 
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { AppComponent } from './app.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
