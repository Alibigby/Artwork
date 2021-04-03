import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../app/service/data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { FavoritesComponent } from './favorites/favorites.component'
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';



const routes: Routes = [

  
]
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'favourites', component: FavoritesComponent},
      {path: '', component: LandingPageComponent},
    ]),
  ],

  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
