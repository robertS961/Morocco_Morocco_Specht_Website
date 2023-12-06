import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationsComponent } from './components/locations/locations.component';
import { TheFirmComponent } from './components/the-firm/the-firm.component';
import { PracticeAreasComponent } from './components/practice-areas/practice-areas.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  //{path: '', redirectTo: 'Home', pathMatch: 'full'},
  {path: 'Home', component:HomeComponent},
  {path: 'Locations', component:LocationsComponent},
  {path: 'TheFirm', component: TheFirmComponent},
  {path: 'PracticeAreas', component: PracticeAreasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
