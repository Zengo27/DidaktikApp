import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-katedrala-jolasa',
  templateUrl: './katedrala-jolasa.page.html',
  styleUrls: ['./katedrala-jolasa.page.scss'],
})
export class KatedralaJolasaPage implements OnInit {
  egokia = "Petxina"
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
      this.router.navigate(["/bukatu"]);
    }else{
      window.location.reload();
    }
    console.log(selectedItem.value);
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
