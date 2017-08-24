import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,ViewEncapsulation } from '@angular/core';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { AppConfig } from '../shared/config/app-config';
/* import { SlideNavComponent } from '../shared/slide-nav/nav-content.component';   
无需注入了 已经在shared全局公共的注入一次 
详见：https://stackoverflow.com/questions/39486029/share-component-between-2-moduls */

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
   

    // private initShowed: boolean = sessionStorage.getItem(AppConfig.welcomeStorageKey) ? false : true;
   

    // @ViewChild('navContent') navContent:ElementRef;

    constructor() {
        // console.log(AppConfig.welcomeStorageKey)
    }

    // showedChange($event): void {
    //     setTimeout(() => {
    //         this.initShowed = $event;
    //         //sessionStorage有值则说明已经显示过启动画面了，刷新不再重复显示启动画面
    //         sessionStorage.setItem(AppConfig.welcomeStorageKey, 'true');
    //     }, 2000);

    // }

    // swipeLeft($event) {
    //     console.log($event);
    // }

    // swipeRight() {

    // }

    

    ngOnInit() {}

    //  ngAfterViewInit(): void {
    //      console.log(this.navContent.nativeElement);
    //      this.navWidth=this.navContent.nativeElement.offsetWidth;
    
    // }



}
