import { Component, OnInit } from '@angular/core';
import { VenuesModel } from '../venues.model';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  venues: VenuesModel[] = [
    new VenuesModel(
      'Hello',
      'laxminagar',
      'Delhi',
      110092,
      ['hello', 'there', 'how'],
      200,
      1000,
      5,
      'https://media.weddingz.in/images/b9c4d816c4c859b84e93fbaa375d1858/the-carnival-pearl-grand-alipur-delhi.jpg'
    ),
    new VenuesModel(
      'Hello2',
      'laxminagar',
      'Delhi',
      110092,
      ['hello', 'there', 'how'],
      200,
      1000,
      5,
      'https://media.weddingz.in/images/b9c4d816c4c859b84e93fbaa375d1858/the-carnival-pearl-grand-alipur-delhi.jpg'
    ),
    new VenuesModel(
      'Hello3',
      'laxminagar',
      'Delhi',
      110092,
      ['hello', 'there', 'how'],
      200,
      1000,
      5,
      'https://media.weddingz.in/images/b9c4d816c4c859b84e93fbaa375d1858/the-carnival-pearl-grand-alipur-delhi.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
