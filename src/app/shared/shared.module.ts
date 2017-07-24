import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './slide-nav/main-content/main-content.component';
import { NavContentComponent } from './slide-nav/nav-content/nav-content.component';
import 'hammerjs';




@NgModule({
  imports: [
    CommonModule,
    //SlideNavComponent
  ],
  declarations: [
    MainContentComponent,
    NavContentComponent
],
  exports:[
    MainContentComponent,
    NavContentComponent
  ]
})
export class SharedModule { }