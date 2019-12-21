class VenuesModel {
  constructor(
    private title: string,
    private address1: string,
    private address2: string,
    private zipCode: string,
    private highlights: string[],
    private capacity: string,
    private price: string,
    private rating: number,
    private imgUrl: string
  ) { }
}
