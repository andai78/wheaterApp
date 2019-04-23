import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FavoritePageModule } from '../favorite/favorite.module';
import { IonicStorageModule } from '@ionic/storage';
import { FavoritePage } from '../favorite/favorite.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HomePage } from './home.page';

import { WeatherService } from '../services/weather.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FavoritePageModule,
    IonicStorageModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  entryComponents: [FavoritePage],
  providers: [Geolocation, WeatherService]
})
export class HomePageModule {}
