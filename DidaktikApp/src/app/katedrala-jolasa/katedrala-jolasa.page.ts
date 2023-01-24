import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-katedrala-jolasa',
  templateUrl: './katedrala-jolasa.page.html',
  styleUrls: ['./katedrala-jolasa.page.scss'],
})
export class KatedralaJolasaPage implements OnInit {
  egokia = "Gargola"
  list = [
    {value:"Petxina", isChecked: false},
    {value:"Gargola", isChecked: false},
    {value:"Pinakulua", isChecked: false},
    {value:"Arbotantea", isChecked: false},
    {value:"Beiratea", isChecked: false}
  ]
  getSelectedItem(selectedItem){
    if(selectedItem.value == this.egokia){
      console.log("Nice");
      window.location.href="/mapa";
    }else{
      window.location.reload();
    }
    console.log(selectedItem.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
