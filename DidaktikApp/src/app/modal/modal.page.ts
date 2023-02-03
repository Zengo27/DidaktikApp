import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  title:string;
  constructor(private router:Router) { }

  ngOnInit() {
    console.log(this.title);
  }
  informazioraJoan(id){
    this.router.navigateByUrl("leku-informazioa/"+id)
  }
}
