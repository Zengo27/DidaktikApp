import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leku-informazioa',
  templateUrl: './leku-informazioa.page.html',
  styleUrls: ['./leku-informazioa.page.scss'],
})
export class LekuInformazioaPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  lekua:number;
  ngOnInit() {
    this.lekua= Number(this.route.snapshot.paramMap.get('lekua'));
  }

}
