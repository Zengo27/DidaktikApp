import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-leku-informazioa',
  templateUrl: './leku-informazioa.page.html',
  styleUrls: ['./leku-informazioa.page.scss'],
})
export class LekuInformazioaPage implements OnInit {

  constructor(private route: ActivatedRoute,private modalCtrl: ModalController) { }

  lekua:number;
  ngOnInit() {
    this.lekua= Number(this.route.snapshot.paramMap.get('lekua'));
    this.modalCtrl.dismiss();
  }

}
