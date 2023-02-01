import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-letra-sopa-jokua',
  templateUrl: './letra-sopa-jokua.page.html',
  styleUrls: ['./letra-sopa-jokua.page.scss'],
})
export class LetraSopaJokuaPage implements ViewWillEnter {
  constructor(
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ionViewWillEnter(): void {
    this.generate();
    this.printSoup();
    this.hitzakGehitu();
    this.aukeratutakoHitza = '';
    this.asmatuta = 0;
  }
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  result = '';
  soup: any = [];
  hitzak: any = [];
  hitzakSplit: any = [];
  hitzSplit: any = [];
  idAukera: any = [];
  idEgokiak: any = [];
  sopa: any;
  divcolumn: any;
  divrow: any;
  hitzakdiv: any;
  hitzakp: any;
  writeDiv: any;
  size: any;
  aukeratutakoHitza: any;
  baieztatuta: any;
  tatxatuHitza: any;
  asmatuta: any;

  generate() {
    this.size = 15;
    var charactersLength = this.characters.length;
    for (var i = 0; i < this.size * this.size; i++) {
      this.result = this.characters.charAt(
        Math.floor(Math.random() * charactersLength)
      );
      this.soup.push(this.result);
    }
  }

  printSoup() {
    this.sopa = document.getElementById('sopa');
    this.sopa.style="text-align:center;"

    this.sopa.addEventListener('touchstart', (event) => {
      this.aukeratu(event.target.id);
    });

    for (var i = 0; i < this.soup.length / this.size; i++) {
      this.divrow = document.createElement('div');
      this.divrow.setAttribute('class', 'divrow');
      this.divrow.setAttribute('id', 'divrow' + i);
      this.sopa?.appendChild(this.divrow);
      for (var j = 0; j < this.soup.length / this.size; j++) {
        this.divcolumn = document.createElement('div');
        this.divcolumn.setAttribute('id', 'div' + 'Y:' + j + 'X:' + i);
        this.divcolumn.setAttribute('class', 'divcolumn');
        this.divcolumn.style="padding:2px;"

        this.divcolumn.textContent = this.soup[i * this.size + j];
        this.divrow.appendChild(this.divcolumn);
      }
    }
  }
  hitzakGehitu() {
    this.hitzak = [
      'BATAILAK',
      'DESFILEAK',
      'NAPOLEON',
      'SUNTSITU',
      'SUTEA',
      'BERRERAIKI',
      'KANDELAK',
    ];
    this.split();
    this.hitzakdiv = document.getElementById('hitzak');

    //BEHEKO HITZAK
    for (var i = 0; i < this.hitzak.length; i++) {
      this.hitzakp = document.createElement('p');
      this.hitzakp.setAttribute('id', 'hitza' + i);
      this.hitzakp.style.margin="2px";
      this.hitzakp.textContent = this.hitzak[i];
      this.hitzakdiv?.appendChild(this.hitzakp);
    }

    //BATAILAK
    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '0');
    this.divcolumn.textContent = this.hitzakSplit[0];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[1];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '2');
    this.divcolumn.textContent = this.hitzakSplit[2];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '3');
    this.divcolumn.textContent = this.hitzakSplit[3];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '4');
    this.divcolumn.textContent = this.hitzakSplit[4];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '5');
    this.divcolumn.textContent = this.hitzakSplit[5];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '6');
    this.divcolumn.textContent = this.hitzakSplit[6];

    this.divcolumn = document.getElementById('div' + 'Y:' + '0' + 'X:' + '7');
    this.divcolumn.textContent = this.hitzakSplit[7];

    //DESFILEAK
    this.divcolumn = document.getElementById('div' + 'Y:' + '4' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[8];

    this.divcolumn = document.getElementById('div' + 'Y:' + '5' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[9];

    this.divcolumn = document.getElementById('div' + 'Y:' + '6' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[10];

    this.divcolumn = document.getElementById('div' + 'Y:' + '7' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[11];

    this.divcolumn = document.getElementById('div' + 'Y:' + '8' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[12];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[13];

    this.divcolumn = document.getElementById('div' + 'Y:' + '10' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[14];

    this.divcolumn = document.getElementById('div' + 'Y:' + '11' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[15];

    this.divcolumn = document.getElementById('div' + 'Y:' + '12' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[16];

    //NAPOLEON

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '6');
    this.divcolumn.textContent = this.hitzakSplit[17];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '7');
    this.divcolumn.textContent = this.hitzakSplit[18];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '8');
    this.divcolumn.textContent = this.hitzakSplit[19];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[20];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '10');
    this.divcolumn.textContent = this.hitzakSplit[21];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '11');
    this.divcolumn.textContent = this.hitzakSplit[22];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '12');
    this.divcolumn.textContent = this.hitzakSplit[23];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '13');
    this.divcolumn.textContent = this.hitzakSplit[24];

    //SUNTSITU

    this.divcolumn = document.getElementById('div' + 'Y:' + '1' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[25];

    this.divcolumn = document.getElementById('div' + 'Y:' + '2' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[26];

    this.divcolumn = document.getElementById('div' + 'Y:' + '3' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[27];

    this.divcolumn = document.getElementById('div' + 'Y:' + '4' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[28];

    this.divcolumn = document.getElementById('div' + 'Y:' + '5' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[29];

    this.divcolumn = document.getElementById('div' + 'Y:' + '6' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[30];

    this.divcolumn = document.getElementById('div' + 'Y:' + '7' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[31];

    this.divcolumn = document.getElementById('div' + 'Y:' + '8' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[32];

    //SUTEA

    this.divcolumn = document.getElementById('div' + 'Y:' + '14' + 'X:' + '8');
    this.divcolumn.textContent = this.hitzakSplit[33];

    this.divcolumn = document.getElementById('div' + 'Y:' + '14' + 'X:' + '9');
    this.divcolumn.textContent = this.hitzakSplit[34];

    this.divcolumn = document.getElementById('div' + 'Y:' + '14' + 'X:' + '10');
    this.divcolumn.textContent = this.hitzakSplit[35];

    this.divcolumn = document.getElementById('div' + 'Y:' + '14' + 'X:' + '11');
    this.divcolumn.textContent = this.hitzakSplit[36];

    this.divcolumn = document.getElementById('div' + 'Y:' + '14' + 'X:' + '12');
    this.divcolumn.textContent = this.hitzakSplit[37];

    //BERRERAIKI

    this.divcolumn = document.getElementById('div' + 'Y:' + '2' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[38];

    this.divcolumn = document.getElementById('div' + 'Y:' + '3' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[39];

    this.divcolumn = document.getElementById('div' + 'Y:' + '4' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[40];

    this.divcolumn = document.getElementById('div' + 'Y:' + '5' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[41];

    this.divcolumn = document.getElementById('div' + 'Y:' + '6' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[42];

    this.divcolumn = document.getElementById('div' + 'Y:' + '7' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[43];

    this.divcolumn = document.getElementById('div' + 'Y:' + '8' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[44];

    this.divcolumn = document.getElementById('div' + 'Y:' + '9' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[45];

    this.divcolumn = document.getElementById('div' + 'Y:' + '10' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[46];

    this.divcolumn = document.getElementById('div' + 'Y:' + '11' + 'X:' + '14');
    this.divcolumn.textContent = this.hitzakSplit[47];

    //KANDELAK

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '1');
    this.divcolumn.textContent = this.hitzakSplit[48];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '2');
    this.divcolumn.textContent = this.hitzakSplit[49];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '3');
    this.divcolumn.textContent = this.hitzakSplit[50];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '4');
    this.divcolumn.textContent = this.hitzakSplit[51];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '5');
    this.divcolumn.textContent = this.hitzakSplit[52];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '6');
    this.divcolumn.textContent = this.hitzakSplit[53];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '7');
    this.divcolumn.textContent = this.hitzakSplit[54];

    this.divcolumn = document.getElementById('div' + 'Y:' + '13' + 'X:' + '8');
    this.divcolumn.textContent = this.hitzakSplit[55];
  }

  split() {
    for (var i = 0; i < this.hitzak.length; i++) {
      for (var j = 0; j < this.hitzak[i].length; j++) {
        this.hitzakSplit.push(this.hitzak[i].charAt(j));
      }
    }
  }
  aukeratu(id: any) {
    this.divcolumn = document.getElementById(id);
    this.margotu(id);
    this.aukeratutakoHitza =
    this.aukeratutakoHitza + this.divcolumn.textContent;
    this.hitzSplit.push(String(this.divcolumn.id));
    this.idAukera.push(this.divcolumn.id);
  }
  baieztatu() {
    this.baieztatuta = false;
    for (var i = 0; i < this.hitzak.length; i++) {
      if (this.hitzak[i] == this.aukeratutakoHitza) {
        this.baieztatuta = true;
        this.tatxatuHitza = document.getElementById('hitza' + i);
        this.tatxatuHitza.setAttribute('style', 'text-decoration: line-through;');
        this.tatxatuHitza.style.margin="2px";
        this.asmatuta = this.asmatuta + 1;
        for (var j = 0; j < this.idAukera.length; j++) {
          this.idEgokiak.push(this.idAukera[j]);
        }
      } else {
        if (this.baieztatuta == false) {
          this.ezabatu();
        }
      }
    }
    if (this.asmatuta == 7) {
      this.alert("Denak asmatu ditutzu!");
    }
    this.idAukera = [];
    this.aukeratutakoHitza = '';
    this.egokiakMargotu();
  }
  margotu(id: any) {
    this.divcolumn = document.getElementById(id);
    this.divcolumn.setAttribute('style', 'background-color: orange;padding:2px;');
  }
  ezabatu() {
    for (var i = 0; i < this.size; i++) {
      for (var j = 0; j < this.size; j++) {
        this.divcolumn = document.getElementById('div' + 'Y:' + i + 'X:' + j);
        this.divcolumn.setAttribute('style', 'background-color: none;padding:2px;');
      }
    }
  }
  egokiakMargotu() {
    for (var i = 0; i < this.idEgokiak.length; i++) {
      this.divcolumn = document.getElementById(this.idEgokiak[i]);
      this.divcolumn.setAttribute('style', 'background-color: orange;padding:2px;');
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
