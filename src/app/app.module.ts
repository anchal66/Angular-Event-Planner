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
import { VenueItemComponent } from './components/venues/venue-item/venue-item.component';

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
    VenueItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
