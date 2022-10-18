import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe-game';
  mainComponent:boolean=true;
  gameComponent:boolean=false;
  OnActivated(){
    this.mainComponent=false;
    this.gameComponent=true;
  }

  openMainPage(){
    this.mainComponent=true;
    this.gameComponent=false;
  }
  score(){
    alert('hi')
    debugger;
  }

}
