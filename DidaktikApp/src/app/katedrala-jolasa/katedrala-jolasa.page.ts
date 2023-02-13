import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-katedrala-jolasa',
  templateUrl: './katedrala-jolasa.page.html',
  styleUrls: ['./katedrala-jolasa.page.scss'],
})
export class KatedralaJolasaPage implements OnInit {
  egokia = "Petxina"
  list = [
    {value:"Gargola", isChecked: false},
    {value:"Pinakulua", isChecked: false},
    {value:"Petxina", isChecked: false},
    {value:"Arbotantea", isChecked: false},
    {value:"Beiratea", isChecked: false}
  ]
 
  constructor(private router: Router,private alertCtrl: AlertController,) { }

  ngOnInit() {
  }

  getSelectedItem(selectedItem){
    if(selectedItem.value == this.egokia){
      console.log("Nice");
      this.router.navigateByUrl("bukatu");
    }else{
      this.garbitu();
      this.alert('Erantzun okerra', false);
    }
    console.log(selectedItem.value);
  }

  garbitu(){
    
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
              this.router.navigateByUrl('bukatu/');
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
              this.router.navigateByUrl('mapa');
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
