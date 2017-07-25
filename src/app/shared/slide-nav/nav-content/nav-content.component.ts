import { Component, OnInit, ViewEncapsulation, ElementRef, AfterViewInit, ViewChild, Input } from '@angular/core';

@Component({
    selector: 'nav-content',
    templateUrl: './nav-content.component.html',
    styleUrls: ['./nav-content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavContentComponent implements OnInit, AfterViewInit {
    @Input() navWidth: string = '70%';//导航浪默认宽度  类型字符串 传值必须将单位单上
    @ViewChild('navContent') navContent: ElementRef;

    ngAfterViewInit(): void {
        console.log(this.navContent.nativeElement.offsetWidth);
    }

    constructor() {}

    ngOnInit() {}

}