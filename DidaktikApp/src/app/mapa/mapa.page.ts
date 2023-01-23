import { Component} from '@angular/core';
import { AlertController, ModalController, ViewWillEnter } from '@ionic/angular';
import * as L from "leaflet";
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements ViewWillEnter {

  leafletMap: any;
  lat: number = 43.3152;
  lng: number = -2.009;
  zoom: number = 12;

  constructor(private alertCtrl: AlertController, private modalCtrl: ModalController) { }

  ionViewWillEnter() {
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

    /* Mapa jarri */
    this.leafletMap.setView([this.lat, this.lng], this.zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '& copy; <a href=”https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.leafletMap);

    /* Markers */
    let icon = L.icon({
      iconUrl: "marker-icon.png",
      iconSize: [30, 40]
    });

    let igeldo = L.marker([43.30964, -2.03707], { icon: icon }).on('click', (izena) => { this.lekuaInfo("Igeldo mendia") }, this).addTo(this.leafletMap);
    let haize_orrazia = L.marker([43.32169, -2.00555], { icon: icon }).on('click', (izena) => { this.lekuaInfo("Haizearen Orrazia") }, this).addTo(this.leafletMap)
    let katedrala = L.marker([43.31668, -1.98154], { icon: icon }).on('click', (izena) => { this.lekuaInfo("Artzain Onaren Katedrala") }, this).addTo(this.leafletMap)
    let danborrada = L.marker([43.192504, -1.590549], { icon: icon }).on('click', (izena) => { this.lekuaInfo("Danborrada") }, this).addTo(this.leafletMap)
    let abuztuak31 = L.marker([43.32407, -1.98574], { icon: icon }).on('click', (izena) => { this.lekuaInfo("Abuztuak 31 kalea") }, this).addTo(this.leafletMap)
    let santelmo = L.marker([43.32504, -1.98504], { icon: icon }).on('click', (izena) => { this.lekuaInfo("San Telmo Museoa") }, this).addTo(this.leafletMap)
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
