import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-jokua',
  templateUrl: './lotzeko-jokua.page.html',
  styleUrls: ['./lotzeko-jokua.page.scss'],
})
export class LotzekoJokuaPage implements OnInit {
  constructor(private navCtrl:NavController,private alertCtrl: AlertController,private router: Router) { }
  aukeratzen = false;
  lehenAukeratua: any;
  bigarrenAukeratua: any;
  asmatuta: number;

  ngOnInit() {
    this.bidaiatu();
    this.asmatuta = 0;
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
        alert('Erantzun okerra');
      }
    }
  }

  margotu(id: any) {
    var element = document.getElementById(id);

    if (element.id == 'img_1' || element.id == 'txt_1') {
      element.style.backgroundColor = 'yellow';
    } else if (element.id == 'img_2' || element.id == 'txt_2') {
      element.style.backgroundColor = 'green';
    } else if (element.id == 'img_3' || element.id == 'txt_3') {
      element.style.backgroundColor = 'red';
    } else if (element.id == 'img_4' || element.id == 'txt_4') {
      element.style.backgroundColor = 'blue';
    }
  }
  bidaiatu() {
    if (this.asmatuta == 4) {
      this.router.navigateByUrl('/mapa');
    }
  }
}
