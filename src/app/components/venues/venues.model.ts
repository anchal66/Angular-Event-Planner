export class VenuesModel {
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
