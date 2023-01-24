import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';
import { clear } from 'console';

@Component({
  selector: 'app-jokua',
  templateUrl: './lotzeko-jokua.page.html',
  styleUrls: ['./lotzeko-jokua.page.scss'],
})
export class LotzekoJokuaPage implements ViewWillEnter {
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  aukeratzen = false;
  lehenAukeratua: any;
  bigarrenAukeratua: any;
  asmatuta: number;
  ionViewWillEnter(): void {
    this.bidaiatu();
    this.asmatuta = 0;
    this.aukeratzen = false;

  }

  aukeratu(id: any) {
    var element = document.getElementById(id);
    if (this.aukeratzen == false) {
      this.lehenAukeratua = element.id.slice(-1);
      this.aukeratzen = true;
      this.margotu(id);
    } else if (this.aukeratzen == true) {
      this.bigarrenAukeratua = element.id.slice(-1);
      if (this.lehenAukeratua == this.bigarrenAukeratua) {
        this.margotu(id);
        this.aukeratzen = false;
        this.asmatuta = this.asmatuta + 1;
        this.bidaiatu();
      } else {
        this.alert('Erantzun okerra');
        this.garbitu();
      }
    }
  }

  margotu(id: any) {
    var element = document.getElementById(id);
    var pimg_1 = document.getElementById("pimg_1");
    var ptxt_1 = document.getElementById("ptxt_1");
    var pimg_2 = document.getElementById("pimg_2");
    var ptxt_2 = document.getElementById("ptxt_2");
    var pimg_3 = document.getElementById("pimg_3");
    var ptxt_3 = document.getElementById("ptxt_3");
    var pimg_4 = document.getElementById("pimg_4");
    var ptxt_4 = document.getElementById("ptxt_4");


    if (element.id == 'img_1') {
      pimg_1.style.color = 'yellow';
    }
    else if (element.id == 'txt_1') {
      ptxt_1.style.color = 'yellow';
    }
    else if (element.id == 'img_2') {
      pimg_2.style.color = 'green';
    }
    else if (element.id == 'txt_2') {
      ptxt_2.style.color = 'green';
    }
    else if (element.id == 'img_3') {
      pimg_3.style.color = 'red';
    }
    else if (element.id == 'txt_3') {
      ptxt_3.style.color = 'red';
    }
    else if (element.id == 'img_4') {
      pimg_4.style.color = 'blue';
    }
    else if (element.id == 'txt_4') {
      ptxt_4.style.color = 'blue';
    }
  }
  bidaiatu() {
    if (this.asmatuta == 4) {
      this.alert('Denak asmatu dituzu!!');
      this.garbitu();
    }
  }
  garbitu() {
    var element = document.getElementById('pimg_1');
    element.style.color = 'black';
    var element = document.getElementById('ptxt_1');
    element.style.color = 'black';
    var element = document.getElementById('pimg_2');
    element.style.color = 'black';
    var element = document.getElementById('ptxt_2');
    element.style.color = 'black';
    var element = document.getElementById('pimg_3');
    element.style.color = 'black';
    var element = document.getElementById('ptxt_3');
    element.style.color = 'black';
    var element = document.getElementById('pimg_4');
    element.style.color = 'black';
    var element = document.getElementById('ptxt_4');
    element.style.color = 'black';
    this.lehenAukeratua = "";
    this.bigarrenAukeratua = "";
    this.asmatuta = 0;
    this.aukeratzen = false;

  }

  async alert(testua: string) {
    const alert = await this.alertCtrl.create({
      subHeader: testua,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Saiatu berriro',
          handler: () => {
            this.router.navigateByUrl('/lotzeko-jokua');
          },
        },
        {
          text: 'Mapara bueltatu',
          handler: () => {
            this.router.navigateByUrl('/mapa');
          },
        },
      ],
    });
    await alert.present();
  }
}
