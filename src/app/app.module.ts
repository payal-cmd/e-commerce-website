import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HelpComponent } from './pages/help/help.component';
import { LocationComponent } from './pages/location/location.component';

import { BikeComponent } from './pages/categories/bike/bike.component';
import { ScootyComponent } from './pages/categories/scooty/scooty.component';
import { ElectricScootyComponent } from './pages/categories/electric-scooty/electric-scooty.component';

import { PopupDialogComponent } from './shared/popup-dialog/popup-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    ContactUsComponent,
    HelpComponent,
    LocationComponent,
    BikeComponent,
    ScootyComponent,
    ElectricScootyComponent,
    PopupDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
