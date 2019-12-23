import { Component, OnInit, Input } from '@angular/core';
import { VenuesModel } from '../../venues.model';

@Component({
  selector: 'app-venue-item',
  templateUrl: './venue-item.component.html',
  styleUrls: ['./venue-item.component.css']
})
export class VenueItemComponent implements OnInit {
  @Input() venue: VenuesModel;
  constructor() { }

  ngOnInit() {
  }

}
