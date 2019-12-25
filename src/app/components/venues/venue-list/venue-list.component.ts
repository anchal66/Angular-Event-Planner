import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { VenuesModel } from '../venues.model';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  @Output() venueSelect = new EventEmitter<VenuesModel>();

  venues: VenuesModel[] = VenuesModel.venueList;

  constructor() { }

  ngOnInit() {
  }
  onSelect(venue: VenuesModel) {
    this.venueSelect.emit(venue);
  }

}
