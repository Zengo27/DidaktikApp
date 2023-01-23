import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

@Component({
  selector: 'app-bikoteak',
  templateUrl: './bikoteak.page.html',
  styleUrls: ['./bikoteak.page.scss'],
})
export class BikoteakPage implements OnInit {

  constructor() { }

  declare card: NodeListOf<HTMLElement>
  declare front: NodeListOf<HTMLElement>

  ngOnInit(): void {
    this.card = document.querySelectorAll<HTMLElement>('.cell');
    this.front = document.querySelectorAll<HTMLElement>('.front');
    this.suffleImage();
    this.clicking();
  }

  suffleImage() {
    this.card.forEach(c => {
      const num = [...Array(this.card.length).keys()]
      const random = Math.floor(Math.random() * this.card.length)
      c.style.order = num[random] + "";
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

  async match(card1: HTMLElement, card2: HTMLElement) {

    if (card1.dataset['index'] == card2.dataset['index']) {
      card1.classList.remove('flip');
      card2.classList.remove('flip');

      card1.classList.add('matched');
      card2.classList.add('matched');

    } else {
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
      }, 1000);
    }
  }

}
