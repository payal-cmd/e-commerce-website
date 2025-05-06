import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HelpComponent } from './pages/help/help.component';
import { LocationComponent } from './pages/location/location.component';

import { BikeComponent } from './pages/categories/bike/bike.component';
import { ScootyComponent } from './pages/categories/scooty/scooty.component';
import { ElectricScootyComponent } from './pages/categories/electric-scooty/electric-scooty.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent, children: [
    { path: 'bike', component: BikeComponent },
    { path: 'scooty', component: ScootyComponent },
    { path: 'electric-scooty', component: ElectricScootyComponent }
  ]},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'location', component: LocationComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
