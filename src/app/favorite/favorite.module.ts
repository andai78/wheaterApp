import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { FavoritePage } from './favorite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,   
  ],
  declarations: [FavoritePage],
  exports: [FavoritePage]
})
export class FavoritePageModule {}
