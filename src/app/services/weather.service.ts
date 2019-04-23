import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONFIG } from '../api/config';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrlWeather :string = "https://api.openweathermap.org/data/2.5/weather";
  private baseUrlForecast :string = "https://api.openweathermap.org/data/2.5/forecast";
  private baseIconUrl: string = "http://openweathermap.org/img/w/" ;
  constructor(private http: HttpClient) { }

  getWeaterCity(lat: number, lon: number) {
    return this.http
      .get(`${this.baseUrlWeather}?lat=${lat}&lon=${lon}&appid=${CONFIG.API_KEY}&units=metric`);
  }
  getWeaterIcon(icon: string) {
    return `${this.baseIconUrl}${icon}.png`;
  }
  getWeaterCityByName(name: string) {
    return this.http.get(`${this.baseUrlWeather}?q=${name}&appid=${CONFIG.API_KEY}&units=metric`)
  }
  getForecast(name: string) {
    return this.http.get(`${this.baseUrlForecast}?q=${name}&appid=${CONFIG.API_KEY}&units=metric&cnt=5`)

  }
}
