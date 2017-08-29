import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { AppConfig } from './shared/config/app-config';
/* import { SlideNavComponent } from '../shared/slide-nav/nav-content.component';   
无需注入了 已经在shared全局公共的注入一次 
详见：https://stackoverflow.com/questions/39486029/share-component-between-2-moduls */

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss',
        '../assets/iconfont/iconfont.scss'
    ],
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
    tempMoveX: number = 0;
    navPixWidth: number = 0;
    tolerance: number = 70; //默认超过宽度自动打开，或者伸缩
    isOpening: boolean = false; //判断是否正在拖动打开状态
    // readonly PanDirection = { panRight: 'panright', panLeft: 'panleft' };//移动方向
    readonly PanDirection = { panRight: 4, panLeft: 2 }; //移动方向
    readonly DirectionType = { Right: 'right', Left: 'left' };
    @Input() navDirection: string = this.DirectionType.Left; //导航条默认出来的方向



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

    changePanFlag(canMoveRight){
        console.log('啦啦啦....');
    }


    onPanStart(event: any): void {
        // event.preventDefault();        
        // console.log('start panEvent');
        console.log(event);
        console.log('qqqqqqqqqqqqqqqqqqq');        
        this.startX = this.moveX;
    }

    panMove(event: any): void {
        // console.log(event.distance);
        console.log(event.deltaX);
        this.isOpening = false;
        this.tempMoveX = this.startX + event.deltaX;
        if (this.tempMoveX <= 0) {
            this.tempMoveX = 0;
        }
        if (Math.abs(this.tempMoveX) > this.navPixWidth) {
            return;
        }
        this.moveX = this.tempMoveX;
        // console.log(event.additionalEvent);
        // console.log(event.direction);
        // console.log(event.offsetDirection);

        // if (this.navDirection === this.DirectionType.Left ) {
        //     if (event.direction === this.PanDirection.panRight && Math.abs(this.navPixWidth) >= event.distance) {
        //         //导航条在[左边] 向右滑动为  逐渐显示导航条
        //         console.log('a2');
        //         this.moveX = event.distance;
        //         return;
        //     }
        //     console.log(event.direction);
        //     console.log(this.navPixWidth);
        //     console.log(event.distance);
        //     if(event.direction === this.PanDirection.panLeft && Math.abs(this.navPixWidth) >= event.distance && this.moveX>=event.distance){
        //         console.log('aaa......');
        //         //导航条在[左边] 向右滑动为  缩小显示导航条
        //         this.moveX = this.moveX-event.distance;
        //         return;
        //     }
        // }



        // if (Math.abs(this.navPixWidth) >= event.distance) {
        //     //设置向右最大滑行距离为导航条宽度
        //     this.moveX = event.distance;
        // }


    }

    panEnd(event: any) {
        console.log('test.....');
        this.isOpening = true;
        if (event.deltaX > 0) {
            //向右滑动显示导航条
            if (Math.abs(event.deltaX) >= this.tolerance) {
                //大于设置的自动打开距离则自动打开                
                this.moveX = this.navPixWidth;
            } else {
                //小于自动打开距离滚回原点
                this.moveX = 0;
            }
        } else {
            //向左滑动隐藏导航条
            if (Math.abs(event.deltaX) >= this.tolerance) {
                //大于设置的自动打开距离则自动打开                
                this.moveX = 0;
            } else {
                //小于自动打开距离滚回原点
                this.moveX = this.navPixWidth;
            }
        }
        setTimeout(function() {
            this.isOpening = false;
        }, 500);
    }

    openNavigator() {
        //打开导航条
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.navPixWidth = this.navContent.nativeElement.offsetWidth;
        console.log(this.navContent.nativeElement);
        console.log(this.navContent.nativeElement.offsetWidth);
    }

}
