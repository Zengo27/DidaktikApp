import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-haizearenorrazia-jokua',
  templateUrl: './haizearenorrazia-jokua.page.html',
  styleUrls: ['./haizearenorrazia-jokua.page.scss'],
})
export class HaizearenorraziaJokuaPage implements OnInit {
  erantzunEgokiak = ["Eduardo Chillidak","altzairuz","Ipar-mendebaldeko","3","9","bere forma eta historiagatik","Eduardo txikitan joaten zen lekua zelako"]
  
  list = [
    {galdera:"Haizearen orrazia ______ egin zuen" ,erantzunak:["Luis Gonzalez-ek","Eduardo Chillidak","Angel Linares-ek"],isChecked: false},
    {galdera:"Haizearen orrazia ______ eginda dago", erantzunak:["altzairuz","kobrez","aluminioz"], isChecked: false},
    {galdera:"Ondarretako hondartzaren ______ muturrean dago", erantzunak:["Ipar-mendebaldeko","Hego-mendebaldeko","Ipar-hegoaldeko"],isChecked: false},
    {galdera:"Haizeen orrazia ______ eskulturak osatzen dute", erantzunak:["4","2","3"], isChecked: false},
    {galdera:"__ tonatik gorako pisua du bakoitzak.", erantzunak:["5","7","9"],isChecked: false},
    {galdera:"Haizearen orrazia berezia da...", erantzunak:["bere formagatik","bere forma eta historiagatik","egileagatik"], isChecked: false},
    {galdera:"Leku horretan kokatuta dago...", erantzunak:["Eduardo txikitan joaten zen lekua zelako","itsasoaren alboan egoteko","leku hartan ondo geratzen zelako."], isChecked: false}
  ]

  constructor(private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  getSelectedItem(selectedItem){
    if(selectedItem == this.erantzunEgokiak[0]){
      this.list.shift();
      this.erantzunEgokiak.shift();
      if(this.list.length == 0){
        this.router.navigateByUrl("bukatu");
      }
    }else{
      this.alert("Erantzun desegokia");
    }
  }

  async alert(testua: string) {
    const alert = await this.alertCtrl.create({
      subHeader: testua,
      backdropDismiss: true,
    });
    await alert.present();
  }
}
