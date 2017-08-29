import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, Input,Output, EventEmitter} from '@angular/core';
import { Gallery } from '../shared/models/interface.model';



@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
    @Input() galleries:Gallery[];
    @Output() changePanFlag=new EventEmitter();
    public deviceWidth:number;
    public moveX:number;

    constructor() {       
    }
    
    ngOnInit() {
        this.deviceWidth=window.screen.width;
        this.moveX=-this.deviceWidth;
        this.getGalleries();
    }

    setTransform() {
        let tranStyle = {
            'transform': 'translate3d(' + this.moveX + 'px, 0, 0)',
            '-webkit-transform': 'translate3d(' + this.moveX + 'px, 0, 0)',
            '-ms-transform': 'translate3d(' + this.moveX + 'px, 0, 0)'
        }
        return tranStyle;
    }

    panstart(event){
        event.preventDefault(); 
        this.changePanFlag.emit(false);
        console.log('aaaaaa');

    }

    getGalleries(){
        var galleriesJson='[{"image":"https:\/\/pic4.zhimg.com\/v2-f6ae935c08999b4978758ac689694167.jpg","type":0,"id":9591220,"ga_prefix":"082815","title":"特别版瞎扯 · 最美的不是下雨天，是曾与你躲过雨的屋檐"},{"image":"https:\/\/pic1.zhimg.com\/v2-5093162dbd5e007331bfe280c814a85c.jpg","type":0,"id":9590474,"ga_prefix":"082814","title":"负能量爆棚无心工作，怎么过了一个周末你还是这么累？"},{"image":"https:\/\/pic3.zhimg.com\/v2-47edcc82a3b7c4a2467fb41ee2e39446.jpg","type":0,"id":9591222,"ga_prefix":"082813","title":"「谁要跟你做鸳鸯鸟啊，你这不是骂人吗」"},{"image":"https:\/\/pic2.zhimg.com\/v2-668a762511a547d8627b7864475e0d99.jpg","type":0,"id":9590958,"ga_prefix":"082811","title":"恋童是一种「疾病」还是一种「性取向」？"},{"image":"https:\/\/pic1.zhimg.com\/v2-f969a29b5a79bbb0f4b136c53fab0740.jpg","type":0,"id":9586188,"ga_prefix":"082506","title":"这里是广告 · 为什么 RAP要唱那么快？"}]';        
        let staticGalleries=JSON.parse(galleriesJson);
        this.galleries=staticGalleries.splice(0,3);
    }

    proxyImageUrl(url){
        if(url){
            url= url.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p');             
        }
        return url ;
    }

    //1.定义轮播图数据虚拟数组
    //2.采用三个图片格子实现无限轮播
    //3.
}
