import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ViewWillEnter } from '@ionic/angular';
import * as L from "leaflet";
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  leafletMap: any;
  lat: number = 43.3152;
  lng: number = -2.009;
  zoom: number = 13;

  listOfMarkers = [
    {
      //Igeldo
      lat: 43.30964,
      lng: -2.03707,
      icon: "../../assets/icon/marker.png",
      izena: "Igeldo mendia",
    },
    {
      //Haize orrazia
      lat: 43.32169,
      lng: -2.00555,
      icon: "../../assets/icon/marker.png",
      izena: "Haizearen Orrazia",
    },
    {
      //Katedrala
      lat: 43.31668,
      lng: -1.98154,
      icon: "../../assets/icon/marker.png",
      izena: "Artzain Onaren Katedrala",
    },
    {
      //Danborrada
      lat: 43.32357,
      lng: -1.98495,
      icon: "../../assets/icon/marker.png",
      izena: "Danborrada",
    },
    {
      //Abuzutak 31
      lat: 43.32407,
      lng: -1.98574,
      icon: "../../assets/icon/marker.png",
      izena: "Abuztuak 31 kalea",
    },
    {
      //San Telmo
      lat: 43.32504,
      lng: -1.98504,
      icon: "../../assets/icon/marker.png",
      izena: "San Telmo Museoa",
    },
  ];

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ngOnInit() {
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

    /* Markerrak egin */
    this.listOfMarkers.forEach((markerData) => {
      let icon = L.icon({
        iconUrl: markerData.icon,
        iconSize: [50, 50]
      });

      let marker = L.marker([markerData.lat, markerData.lng], { icon: icon }).on('click', (izena) => { this.lekuaInfo(markerData.izena) }, this).addTo(this.leafletMap)

    });

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
  /**goBack(): void {
    
   }**/
}
