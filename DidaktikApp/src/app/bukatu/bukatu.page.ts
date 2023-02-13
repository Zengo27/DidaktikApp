import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bukatu',
  templateUrl: './bukatu.page.html',
  styleUrls: ['./bukatu.page.scss'],
})
export class BukatuPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /*maparaJoan(){
    this.router.navigateByUrl('mapa');
  }*/
}
