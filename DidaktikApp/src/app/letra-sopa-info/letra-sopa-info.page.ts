import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController, ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-letra-sopa-info',
  templateUrl: './letra-sopa-info.page.html',
  styleUrls: ['./letra-sopa-info.page.scss'],
})
export class LetraSopaInfoPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }
  bidaiatu() {
    this.router.navigateByUrl("/letra-sopa-jokua");
  }
}
