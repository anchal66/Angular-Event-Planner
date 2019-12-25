export class VenuesModel {
  static venueList: VenuesModel[] = [
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
    ),
    new VenuesModel(
      'Anshu ka Hotel',
      'Gaziabad',
      'UP',
      110092,
      ['Disc', 'Club', 'Bar'],
      100,
      6000,
      4.5,
      // tslint:disable-next-line: max-line-length
      'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/08/06/sexiest-hotel-rooms-slideshow/andaz-san-diego-sweet-suite-california.jpg.rend.hgtvcom.966.725.suffix/1491580839478.jpeg'
    ),
    new VenuesModel(
      'Avinash ka hotel',
      'laxminagar',
      'Delhi',
      110092,
      ['Aarti', 'Bajan', 'Kirtan'],
      300,
      5000,
      5,
      // tslint:disable-next-line: max-line-length
      'https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1445018598/SEXY1015-Burj-Al-Arab-Jumeirah.jpg?itok=fgL5euLe'
    )
  ]
  constructor(
    private title: string,
    private address1: string,
    private address2: string,
    private zipCode: number,
    private highlights: string[],
    private capacity: number,
    private price: number,
    private rating: number,
    private imgUrl: string
  ) { }
}
