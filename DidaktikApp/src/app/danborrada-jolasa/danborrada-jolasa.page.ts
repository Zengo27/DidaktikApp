import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-danborrada-jolasa',
  templateUrl: './danborrada-jolasa.page.html',
  styleUrls: ['./danborrada-jolasa.page.scss'],
})
export class DanborradaJolasaPage implements ViewWillEnter {
  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router
  ) {}
  asmatuta: any;
  galderak: string[];
  erantzunEgokiak: string[];
  ans: any;

  ionViewWillEnter(): void {
    this.asmatuta = 0;
    this.ans = "";
    this.galderak = [
      'Noiz ospatzen da danborrada?',
      'Zein izan zen danborradaren abestiak konposatu zituena?',
      'Non hasten da danborrada jaia?',
      'Zenbat danborrada talde daude?',
    ];
    this.erantzunEgokiak = [
      'Urtarrilaren 20an',
      'Raimundo Sarriegi',
      'Konstituzio plazan',
      '147',
    ];
    document.getElementById('galdera').innerHTML = this.galderak[this.asmatuta];
  }
  hurrengoa() {
    if (this.asmatuta < 3) {
      this.ans = document.getElementById('erantzuna');
      if (this.ans.value == this.erantzunEgokiak[this.asmatuta]) {
        this.asmatuta = this.asmatuta + 1;
        document.getElementById('galdera').innerHTML =
          this.galderak[this.asmatuta];
        this.ans.value = ""
      } else {
        this.alert('Erantzun okerra');
      }
    }
    else {
      this.alert('Denak asmatu dituzu!!');
    }
  }
  async alert(testua: string) {
    const alert = await this.alertCtrl.create({
      subHeader: testua,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Saiatu berriro',
          handler: () => {
            window.location.reload();
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
