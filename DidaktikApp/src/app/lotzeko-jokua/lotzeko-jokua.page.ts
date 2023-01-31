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
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  aukeratzen = false;
  lehenAukeratua: any;
  bigarrenAukeratua: any;
  asmatuta: number;
  lehenId=0;
  ionViewWillEnter(): void {
    this.bidaiatu();
    this.asmatuta = 0;
    this.aukeratzen = false;

  }

  aukeratu(id: any) {
    var element = document.getElementById(id);
    if (this.aukeratzen == false) {
      this.lehenId=id;
      this.lehenAukeratua = element.id.slice(-1);
      this.aukeratzen = true;
      this.margotu(id);
    } else if (this.aukeratzen == true) {
      this.bigarrenAukeratua = element.id.slice(-1);
      if (this.lehenAukeratua == this.bigarrenAukeratua) {
        this.margotu(id);
        this.aukeratzen = false;
        
        var pimg = document.getElementById("p"+this.lehenId)as HTMLInputElement;
        var ptxt = document.getElementById("p"+id)as HTMLInputElement;

        pimg.style.color="#FFBD91";
        ptxt.style.color="#FFBD91";
        this.asmatuta = this.asmatuta + 1;

        this.bidaiatu();
      } else {
        this.alert('Erantzun okerra', false);
        this.garbitu();
      }
    }
  }

  margotu(id: any) {
    var element = document.getElementById(id);
    var pimg_1 = document.getElementById("pimg_1")as HTMLInputElement;
    var ptxt_1 = document.getElementById("ptxt_1")as HTMLInputElement;
    var pimg_2 = document.getElementById("pimg_2")as HTMLInputElement;
    var ptxt_2 = document.getElementById("ptxt_2")as HTMLInputElement;
    var pimg_3 = document.getElementById("pimg_3")as HTMLInputElement;
    var ptxt_3 = document.getElementById("ptxt_3")as HTMLInputElement;
    var pimg_4 = document.getElementById("pimg_4")as HTMLInputElement;
    var ptxt_4 = document.getElementById("ptxt_4")as HTMLInputElement;


    if (element.id == 'img_1') {
      pimg_1.name="radio-button-on-outline";
    }
    else if (element.id == 'txt_1') {
      ptxt_1.name="radio-button-on-outline";
    }
    else if (element.id == 'img_2') {
      pimg_2.name="radio-button-on-outline";
    }
    else if (element.id == 'txt_2') {
      ptxt_2.name="radio-button-on-outline";
    }
    else if (element.id == 'img_3') {
      pimg_3.name="radio-button-on-outline";
    }
    else if (element.id == 'txt_3') {
      ptxt_3.name="radio-button-on-outline";
    }
    else if (element.id == 'img_4') {
      pimg_4.name="radio-button-on-outline";
    }
    else if (element.id == 'txt_4') {
      ptxt_4.name="radio-button-on-outline";
    }
  }
  bidaiatu() {
    if (this.asmatuta == 4) {
      this.alert('Denak asmatu dituzu!!', true);
      this.garbitu();
    }
  }
  garbitu() {
    var element = document.getElementById('pimg_1')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('ptxt_1')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('pimg_2')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('ptxt_2')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('pimg_3')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('ptxt_3')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('pimg_4')as HTMLInputElement;
    element.name="radio-button-off-outline";
    var element = document.getElementById('ptxt_4')as HTMLInputElement;
    element.name="radio-button-off-outline";

    this.lehenAukeratua = "";
    this.bigarrenAukeratua = "";
    this.asmatuta = 0;
    this.lehenId = 0;
    this.aukeratzen = false;
  }

  async alert(testua: string, lortu:boolean) {
    let alert=null;
    if(lortu){
      alert = await this.alertCtrl.create({
        subHeader: testua,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Hurrengo jolasa',
            handler: () => {
              this.router.navigateByUrl('/katedrala-jolasa');
            },
          },
        ],
      });
    }else{
      alert = await this.alertCtrl.create({
        subHeader: testua,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Mapara bueltatu',
            handler: () => {
              this.router.navigate(['/mapa']);
            },
          },
          {
            text: 'Saiatu berriro',
            handler: () => {
              window.location.reload();
            },
          },
        ],
      });
    }
    
    await alert.present();
  }
}
