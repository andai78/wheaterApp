import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WeatherService } from '../services/weather.service';
import { Storage } from '@ionic/storage';
import { CITIES } from '../mock/cities';
import { City } from '../classes/City';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  mainTemperature: number;
  mainCity: string;
  cities: City[];
  favoriteCity: City;
  icon: string;

  constructor(
    private geolacation: Geolocation,
    private weatherService: WeatherService,
    private storage: Storage,
    private alertCtrl: AlertController,
    private router: Router
    ) {}

  ngOnInit() {
    this.cities = CITIES;
    console.log(this.geolacation);
    this.geolacation.getCurrentPosition()
      .then((resp: any) => {
        return this.weatherService.getWeaterCity(
          resp.coords.latitude,
          resp.coords.longitude
        ).subscribe((respApi: any) => {
            this.mainTemperature = respApi.main.temp;
            this.mainCity = respApi.name;
            this.icon = this.weatherService.getWeaterIcon(respApi.weather[0].icon);
            console.log(respApi)
        })
      })
      .catch(err => console.log(err));
      this.setCityTempAndIcon(this.cities);
      
  }
  private setCityTempAndIcon(cities:City[]): void {
    for(let city of cities) 
    {
      this.weatherService.getWeaterCity(city.Latitude, city.Longitude)
        .subscribe((resp: any) => {
          city.setTemp(resp.main.temp);
          city.setIcon(this.weatherService.getWeaterIcon(resp.weather[0].icon));
      })
    }
  }
  
  private goToDetails(cityName: string): void {
    this.router.navigate(['/detail', cityName]);
  }

  async addFavorite() {
    const alert = await this.alertCtrl.create({
      header: 'Ajouter une ville',
      buttons: [
        {
          text: 'Ajouter',
          handler: (data) => {
            this.storage.set('favorite', data.favorite );
            this.weatherService.getWeaterCityByName(data.favorite)
              .subscribe((resp: any) => {
                this.favoriteCity = new City(
                  data.favorite,
                  resp.coord.lat,
                  resp.coord.lon
                );
                this.favoriteCity.setTemp(resp.main.temp);
                this.favoriteCity.setIcon(this.weatherService.getWeaterIcon(resp.weather[0].icon));
                this.cities.push(this.favoriteCity);
                console.log(this.favoriteCity)
              })
          }
        },
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('annuler')
          }
        }
      ],
      inputs: [
        {
          name: 'favorite',
          type: 'text'
        }
      ]
    });
  
    await alert.present();
  }
}
