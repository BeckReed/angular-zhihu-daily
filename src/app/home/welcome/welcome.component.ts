import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AppConfig } from '../../shared/config/app-config';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent implements OnInit {
  private hasTimeout: boolean = false;
  @Input() notShowed:boolean;
  @Output() changeShowed=new EventEmitter();

  constructor() { }


  /**
   * 2秒后隐藏欢迎画面
   */
  removeWelcome(): void {
    setTimeout(() => {
      console.log('获取父级传递的值---->'+this.notShowed);
      this.hasTimeout = true;
      this.notShowed=false;
      this.changeShowed.emit(this.notShowed);
    }, 2000);
  }




  ngOnInit() {
    this.removeWelcome();
  }

}
