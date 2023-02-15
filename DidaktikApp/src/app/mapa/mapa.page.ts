import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import * as L from "leaflet";
import { ModalPage } from '../modal/modal.page';
import { LekuakService } from '../services/lekuak.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements AfterViewInit {

  leafletMap: any;
  lat: number = 43.3152;
  lng: number = -2.009;
  zoom: number = 13;

  listOfMarkers = [];
  refresh = false;

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController, private route: ActivatedRoute, private lekuaService: LekuakService) { }

  ngAfterViewInit() {
    this.mapaKargatu();
  }

  mapaKargatu() {

    this.leafletMap = new L.Map('map');

    /* Kargatzeko dana ondo */
    const self = this;
    this.leafletMap.on("load", function () {

      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 10);
    });

    this.lekuaService.getLekuak(this.refresh).subscribe((data) => {
      this.listOfMarkers = data;

      /* Markerrak egin */
      this.listOfMarkers.forEach((markerData) => {
        let icon = L.icon({
          iconUrl: markerData.iconUrl,
          iconSize: [50, 50]
        });

        let marker = L.marker([markerData.lat, markerData.lng], { icon: icon }).on('click', (izena) => { this.lekuaInfo(markerData.izena) }, this).addTo(this.leafletMap)
      });
    })

    /* Mapa jarri */
    this.leafletMap.setView([this.lat, this.lng], this.zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '& copy; <a href=”https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);
  }

  async lekuaInfo(izena) {
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'title': izena
      },
      breakpoints: [0, 0.3, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      subHeader: 'Klik egin ikusten duzun lekuetan informazio gehiago lortzeko eta jolasteko',
      buttons: ['Ados'],
    });

    await alert.present();
  }
}
