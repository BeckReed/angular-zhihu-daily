import { Component, OnInit, ViewEncapsulation,ElementRef,AfterViewInit,ViewChild } from '@angular/core';

@Component({
    selector: 'main-content',
    templateUrl: './main-content.component.html',
    styleUrls: ['./main-content.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MainContentComponent implements OnInit,AfterViewInit {
    ngAfterViewInit(): void {
        console.log(this.navContent.nativeElement.offsetWidth);
    }
    x: number = 0;
    y: number = 0;
    startX: number = 0;
    startY: number = 0;
    moveX: number = 0;
    navWidth: number = 0;

    @ViewChild('navContent') navContent: ElementRef;

    constructor() {}

    onPanStart(event: any): void {
        event.preventDefault();
        console.log('start panEvent');
        console.log(event);
    }

    panMove(event: any): void {
        console.log('moving....');
        console.log(event.distance);
        this.moveX = event.distance;
    }





    ngOnInit() {}

}