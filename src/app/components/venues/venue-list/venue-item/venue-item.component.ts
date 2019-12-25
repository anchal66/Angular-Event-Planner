import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VenuesModel } from '../../venues.model';

@Component({
  selector: 'app-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.css']
})
export class VenueItemComponent implements OnInit {
  @Output() venueSelected = new EventEmitter<void>();
  @Input() venue: VenuesModel;
  constructor() { }

  ngOnInit() {
  }
  onSelect(){
    this.venueSelected.emit();
  }
}
