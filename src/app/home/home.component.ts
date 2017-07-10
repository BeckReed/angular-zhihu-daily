import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppConfig } from '../shared/config/app-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private initShowed: boolean = sessionStorage.getItem(AppConfig.welcomeStorageKey)  ? false : true;

  constructor() {
    console.log(AppConfig.welcomeStorageKey)
  }

  showedChange($event): void {
    setTimeout(() => {
      this.initShowed = $event;
      //sessionStorage有值则说明已经显示过启动画面了，刷新不再重复显示启动画面
      sessionStorage.setItem(AppConfig.welcomeStorageKey, 'true');
    }, 2000);

  }

  ngOnInit() {
  }

}
