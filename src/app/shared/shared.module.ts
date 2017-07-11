import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideNavComponent } from './slide-nav/slide-nav.component';


@NgModule({
  imports: [
    CommonModule,
    //SlideNavComponent
  ],
  declarations: [
    SlideNavComponent
],
  exports:[
    SlideNavComponent
  ]
})
export class SharedModule { }