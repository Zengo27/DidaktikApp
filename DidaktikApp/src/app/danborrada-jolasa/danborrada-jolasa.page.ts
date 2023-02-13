import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-danborrada-jolasa',
  templateUrl: './danborrada-jolasa.page.html',
  styleUrls: ['./danborrada-jolasa.page.scss'],
})
export class DanborradaJolasaPage implements ViewWillEnter{
  galderak= [
    'Noiz ospatzen da danborrada?',
    'Zein izan zen danborradaren abestiak konposatu zituena?',
    'Non hasten da danborrada jaia?',
    'Zenbat danborrada talde daude?',
  ];
  erantzunEgokiak= [
    'Urtarrilaren 20an',
    'Raimundo Sarriegi',
    'Konstituzio plazan',
    '147',
  ];
  ans: any;

  constructor(private alertCtrl: AlertController, private router: Router) {}

  ionViewWillEnter() {
    
  }
  hurrengoa() {
    this.ans = "";
    if (this.galderak.length > 1) {
      this.ans = document.getElementById('erantzuna');

      if (this.ans.value.trim().toLowerCase() == this.erantzunEgokiak[0].toLowerCase()) {
        this.galderak.shift();
        this.erantzunEgokiak.shift();
        this.ans.value = ""
      } else {
        this.alert('Erantzun okerra',false);
        this.ans.value = ""
      }
    }
    else {
      this.alert('Denak asmatu dituzu!!',true);
    }
  }

  async alert(testua: string, lortu:boolean) {
    let alert=null;
    if(lortu){
      alert = await this.alertCtrl.create({
        subHeader: testua,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Bukatu',
            handler: () => {
              this.router.navigateByUrl('bukatu');
            },
          },
        ],
      });
    }else{
      alert = await this.alertCtrl.create({
        subHeader: testua,
        backdropDismiss: true,
      });
    }
    await alert.present();
  }
}
