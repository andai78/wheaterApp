import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.page.html',
  styleUrls: ['./favorite.page.scss'],
})
export class FavoritePage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
