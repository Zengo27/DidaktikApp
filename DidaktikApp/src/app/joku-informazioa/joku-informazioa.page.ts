import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joku-informazioa',
  templateUrl: './joku-informazioa.page.html',
  styleUrls: ['./joku-informazioa.page.scss'],
})
export class JokuInformazioaPage implements OnInit {

  lekua:number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.lekua= Number(this.route.snapshot.paramMap.get('lekua'));
  }

}
