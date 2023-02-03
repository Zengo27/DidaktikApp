import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-igeldo-argazkiak',
  templateUrl: './igeldo-argazkiak.page.html',
  styleUrls: ['./igeldo-argazkiak.page.scss'],
})
export class IgeldoArgazkiakPage implements OnInit {
  lekua:number;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.lekua= Number(this.route.snapshot.paramMap.get('lekua'));
  }

  bikoteak(){
    this.router.navigateByUrl("leku-informazioa/"+this.lekua+"/"+"joku-informazioa/"+"igeldo-argazkiak/bikoteak");
  }
}
