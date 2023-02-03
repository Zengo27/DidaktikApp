import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-bikoteak',
  templateUrl: './bikoteak.page.html',
  styleUrls: ['./bikoteak.page.scss'],
})
export class BikoteakPage implements ViewWillEnter {

  constructor(private navCtrl:NavController,private alertCtrl: AlertController,private router: Router) { }

  declare card: NodeListOf<HTMLElement>;
  declare front: NodeListOf<HTMLElement>;
  declare attempts: number;

  ionViewWillEnter(): void {
    this.card = document.querySelectorAll<HTMLElement>('.cell');
    this.front = document.querySelectorAll<HTMLElement>('.front');
    this.attempts = 0;
    this.suffleImage();
    this.clicking();
  }

  suffleImage() {
    this.card.forEach(c => {
      const num = [...Array(this.card.length).keys()]
      const random = Math.floor(Math.random() * this.card.length)
      c.style.order = num[random] + "";
    })

    this.front.forEach(c=>{
      c.classList.remove("matched")
    })
  }

  clicking() {
    for (let i = 0; i < this.card.length; i++) {
      this.card[i].addEventListener('click', (e) => {
        this.front[i].classList.add('flip');
        const flipped = document.querySelectorAll<HTMLElement>('.flip');

        if (flipped.length == 2) {
          this.match(flipped[0], flipped[1]);
        }
      })
    }
  }

  async match(flipped1: HTMLElement, flipped2: HTMLElement) {

    if (flipped1.dataset['index'] == flipped2.dataset['index']) {
      this.cardsAreTheSame(flipped1, flipped2);
    } else {
      this.cardsNotTheSame(flipped1, flipped2);
    }
  }


  cardsAreTheSame(card1: HTMLElement, card2: HTMLElement) {
    card1.classList.remove('flip');
    card2.classList.remove('flip');

    card1.classList.add('matched');
    card2.classList.add('matched');

    const matched = document.querySelectorAll<HTMLElement>('.matched');
    if(matched.length==10){
      this.router.navigateByUrl('bukatu');
    }
  }

  cardsNotTheSame(card1: HTMLElement, card2: HTMLElement) {
    this.attempts++;

    if (this.attempts < 5) {
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
      }, 500);
    } else {
      this.alert('Saiakera guztiak agortu dituzu');
    }
  }


  async alert(testua:string) {
    const alert = await this.alertCtrl.create({
      subHeader: testua,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Saiatu berriro',
          handler: () => {
              window.location.reload();
          },
        },
        {
          text: 'Atzera joan',
          handler: () => {
              this.router.navigateByUrl("mapa/");
          },
        },
      ],
    });
    await alert.present();
  }
}
