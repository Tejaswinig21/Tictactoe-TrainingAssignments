import { Component, EventEmitter, OnInit,Output,ViewChild } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
constructor(private router:Router) { }

  @Output() mainPage=new EventEmitter();
  @Output() scores=new EventEmitter();
  ngOnInit(): void {
  }
  totalxscore:number=0;
  totalyscore:number=0;
  addScores(score:{xscore:number,yscore:number}){
    this.totalxscore+=score.xscore;
    this.totalyscore+=score.yscore;
    this.scores.emit();
  }
  gotoMainPage(){
    this.mainPage.emit();
  }
  
}
