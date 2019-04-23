import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  cityName: string;
  forecast: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private weatherService: WeatherService
    ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cityName = params.name;
      this.weatherService.getForecast(this.cityName).subscribe((resp: any) => {
        this.forecast = resp.list;
      })
    })
  }

  goBack() {
    this.router.navigate(['home'])
  }

  getIcon(icon: string) {
    return this.weatherService.getWeaterIcon(icon)
  }
 
}
