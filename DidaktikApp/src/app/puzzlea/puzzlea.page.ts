import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puzzlea',
  templateUrl: './puzzlea.page.html',
  styleUrls: ['./puzzlea.page.scss'],
})
export class PuzzleaPage implements OnInit {

  constructor() { }

  piezas=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  numClick=0;
  primeraPieza=0;
  segundaPieza=0;

  ngOnInit(){
    this.desordenar();
    this.posicionarPiezas();
  }

  seleccionar(id:number){
    this.numClick++;

    if(this.numClick==1){
      this.primeraPieza=id;
      document.getElementById("img_"+id).style.border="solid 3px orange";
      for(let i=0;i<this.piezas.length;i++){
        if(this.piezas[i]!=id){
          document.getElementById("img_"+this.piezas[i]).style.opacity="0.5";
        }
      }
    }else if(this.numClick==2){
      this.segundaPieza=id;
      
      var auxi = this.piezas[this.primeraPieza];
      this.piezas[this.primeraPieza]=this.piezas[this.segundaPieza];
      this.piezas[this.segundaPieza]=auxi;

      this.desmarcar();
      this.numClick=0;
      this.posicionarPiezas();
    }
  }

  desmarcar(){
    var cachos=document.querySelectorAll("img");
    cachos.forEach((cacho)=>{
      cacho.style.border="";
      cacho.style.opacity="1";
    })
  }

  desordenar(){
    for (let i = this.piezas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = this.piezas[i];
      this.piezas[i] = this.piezas[j];
      this.piezas[j] = temp;
    }
  }

  posicionarPiezas(){
    for(let i=0;i<this.piezas.length;i++){
      document.getElementById("img_"+i).setAttribute("src","../../assets/images/puzzlea/pieza"+(this.piezas[i])+".png");
    }

  this.comprobarCompletado();
  }

  comprobarCompletado(){
    var completo=true;
      for(let i=0;i<this.piezas.length;i++){

        if(this.piezas[i]!=i){
          completo=false;
        }
      }
      if(completo){
        alert("Has completado el puzzle");
      }
  }
}
