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

  totalxscore:number=0;
  totaloscore:number=0;
  
  ngOnInit(): void {
  }
  
  addScores(score:{xscore:number,oscore:number}){
    this.totalxscore+=score.xscore;
    this.totaloscore+=score.oscore;
  }

  
}
