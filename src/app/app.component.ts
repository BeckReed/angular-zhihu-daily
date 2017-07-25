import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AppConfig } from './shared/config/app-config';
/* import { SlideNavComponent } from '../shared/slide-nav/nav-content.component';   
无需注入了 已经在shared全局公共的注入一次 
详见：https://stackoverflow.com/questions/39486029/share-component-between-2-moduls */

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit {

    private initShowed: boolean = sessionStorage.getItem(AppConfig.welcomeStorageKey) ? false : true;

    @Input() navWidth: string = '70%'; //导航浪默认宽度  类型字符串 传值必须将单位单上    
    @ViewChild('navContent') navContent: ElementRef;
    x: number = 0;
    y: number = 0;
    startX: number = 0;
    startY: number = 0;
    moveX: number = 0;
    navPixWidth: number = 0;
    tolerance: number = 70; //默认超过宽度自动打开，或者伸缩
    readonly PanDirection = { panRight: 4, panLeft: 2 };//移动方向
    // defaultDirection:any=PanDirection.panRight;



    setTransform() {
        let tranStyle = {
            'transform': 'translate3d(' + this.moveX + 'px, 0, 0)',
            '-webkit-transform': 'translate3d(' + this.moveX + 'px, 0, 0)',
            '-ms-transform': 'translate3d(' + this.moveX + 'px, 0, 0)'
        }
        return tranStyle;
    }


    // @ViewChild('navContent') navContent:ElementRef;

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


    onPanStart(event: any): void {
        event.preventDefault();
        console.log('start panEvent');
        console.log(event);
    }

    panMove(event: any,panDirection:number=this.PanDirection.panRight): void {
        console.log(event);
        console.log(event.additionalEvent);
        console.log(event.direction);
        console.log(event.offsetDirection);
        if(this.PanDirection.panRight)
        if (Math.abs(this.navPixWidth) >= event.distance) {
            //设置向右最大滑行距离为导航条宽度
            this.moveX = event.distance;
        }


    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.navPixWidth = this.navContent.nativeElement.offsetWidth;
        console.log(this.navContent.nativeElement);
        console.log(this.navContent.nativeElement.offsetWidth);
    }

}
