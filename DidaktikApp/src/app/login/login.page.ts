import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ViewWillEnter } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { File } from '@awesome-cordova-plugins/file/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

  constructor(private modalCtrl: ModalController) { }

  
  aukeratutakoIkonoa: any;
  irudia: any;
  aukeratutakoIzena: any;
  data: any;

  ngOnInit() {
  }

  ikonoaGorde(src:any,id:any) {
    this.aukeratutakoIkonoa = src;
    for (var i=0;i < 4;i++) {
      this.irudia = document.getElementById(String(i));
      this.irudia.setAttribute('style', 'background-color: none;');
    }
    this.irudia = document.getElementById(id);
    this.irudia.setAttribute('style', 'background-color: orange;');
  }
  aukerakPasatu() {
    window.location.href = ('mapa/'+this.aukeratutakoIzena+'-'+this.aukeratutakoIkonoa.slice(20));
    
  }


}
