import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VenuesComponent } from './components/venues/venues.component';
import { VendorsComponent } from './components/vendors/vendors.component';
import { GalleryWeddingsComponent } from './components/gallery-weddings/gallery-weddings.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { VenueListComponent } from './components/venues/venue-list/venue-list.component';
import { VenueItemComponent } from './components/venues/venue-list/venue-item/venue-item.component';
import { VendorsListComponent } from './components/vendors/vendors-list/vendors-list.component';
import { VendorsItemComponent } from './components/vendors/vendors-item/vendors-item.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VenuesComponent,
    VendorsComponent,
    GalleryWeddingsComponent,
    HeaderComponent,
    FooterComponent,
    VenueListComponent,
    VenueItemComponent,
    VendorsListComponent,
    VendorsItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
