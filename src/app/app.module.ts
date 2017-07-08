import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './home/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,//<--import the FormsModule before binding with [(ngModel)]    
    AppRoutingModule,//For last import to set gloab routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/**
 * TODO:
 * 1.添加初始化路由
 * 2.注入公共第一个home首页页面数据
 */
