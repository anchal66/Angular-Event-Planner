import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VenuesComponent } from './components/venues/venues.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { GalleryWeddingsComponent } from './components/gallery-weddings/gallery-weddings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'venues', component: VenuesComponent },
  { path: 'vendors', component: VendorsComponent },
  { path: 'gallery', component: GalleryWeddingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
