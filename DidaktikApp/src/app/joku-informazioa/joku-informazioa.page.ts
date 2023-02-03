import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-joku-informazioa',
  templateUrl: './joku-informazioa.page.html',
  styleUrls: ['./joku-informazioa.page.scss'],
})
export class JokuInformazioaPage implements OnInit {

  lekua:number;

  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.lekua= Number(this.route.snapshot.paramMap.get('lekua'));
  }

  jokuak(jokua:string){
    this.router.navigateByUrl("leku-informazioa/"+this.lekua+"/"+"joku-informazioa/"+jokua);
  }

}
