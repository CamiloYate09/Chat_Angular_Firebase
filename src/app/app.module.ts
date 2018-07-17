import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//1---
import {FormsModule} from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
//COMPONENTES
import { ChatComponent } from './components/chat/chat.component';
//servicios
import {ChatService} from './providers/chat.service';
import { LoginComponent } from './components/login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    //  1---
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    // AngularFireStorageModule // imports firebase/storage only needed for storage features
    FormsModule,
  ],

  //servicios
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }