export class City {
  private name: string;
  private latitude: number;
  private longitude: number;
  private temperature?: number;
  private icon?: string;

  constructor(_name: string, _lat: number, _lon: number) {
    this.name = _name;
    this.latitude = _lat;
    this.longitude = _lon;
  }

  get Name() {
    return this.name;
  }

  get Latitude() {
    return this.latitude;
  }

  get Longitude() {
    return this.longitude;
  }

  public setTemp(temp: number): void {
    this.temperature = temp;
  }

  public setIcon(_icon: string) {
    this.icon = _icon;
  }
}