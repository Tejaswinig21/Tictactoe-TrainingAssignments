import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @Output() exitPage=new EventEmitter(); 
  arr:number[][]=[[2,2,2],[2,2,2],[2,2,2]];
  draw:number=0;
  val='';
  win:number=0;
  player='';
  winningSum:number=10;
  playerTurn:boolean=false;
  xinputCount:number=0;
  oinputCount:number=0;
  totalInputCount:number=0;
  imageSource='';
  @Output() scores=new EventEmitter<{xscore:number,oscore:number}>();
  
  getColor(){
    if(this.playerTurn==true){
      return 'red';
    }
    else{
      return 'yellow'
    }
  }

  play(r:number,c:number,event:Event){
    if(this.playerTurn==false && (event.target as HTMLInputElement).value=='' ){
      (event.target as HTMLInputElement).value='X';
      this.playerTurn=true;
      this.arr[r][c]=1;
      this.xinputCount+=1;
    }
    else if(this.playerTurn==true && (event.target as HTMLInputElement).value==''){
      (event.target as HTMLInputElement).value='O';
      this.playerTurn=false;
      this.arr[r][c]=0;
      this.oinputCount+=1;
    }
    this.totalInputCount+=1;
    if(this.xinputCount>2 || this.oinputCount>2){
      this.check();
    }
  }
  
  check(){
    if (this.arr[0][0] != 2 && this.arr[0][1] != 2 && this.arr[0][2] != 2) {
      if(this.checkWinner(0,0,0,1,0,2)){
        return;
      }
    }
    if (this.arr[1][0] != 2 && this.arr[1][1] != 2 && this.arr[1][2] != 2) {
      if(this.checkWinner(1,0,1,1,1,2)){
        return;
      }
      }
    if (this.arr[2][0] != 2 && this.arr[2][1] != 2 && this.arr[2][2] != 2) {
      if(this.checkWinner(2,0,2,1,2,2)){
        return;
      }
    }
    if (this.arr[0][0] != 2 && this.arr[1][0] != 2 && this.arr[2][0] != 2) {
      if(this.checkWinner(0,0,1,0,2,0)){
        return;
      }
    }
    if (this.arr[0][1] != 2 && this.arr[1][1] != 2 && this.arr[2][1] != 2) {
      if(this.checkWinner(0,1,1,1,2,1)){
        return;
      }    
    }
    if (this.arr[0][2] != 2 && this.arr[1][2] != 2 && this.arr[2][2] != 2) {
      if(this.checkWinner(0,2,1,2,2,2)){
        return;
      }
    }
    if (this.arr[0][0] != 2 && this.arr[1][1] != 2 && this.arr[2][2] != 2) {
      if(this.checkWinner(0,0,1,1,2,2)){
        return;
      }
    }
    if (this.arr[0][2] != 2 && this.arr[1][1] != 2 && this.arr[2][0] != 2) {
      if(this.checkWinner(0,2,1,1,2,0)){
        return;
      }
    }
    if (this.totalInputCount==9 && this.win!=1) {
      this.openModel();
      this.draw=1;
    }
      }

  checkWinner(row1:number,col1:number,row2:number,col2:number,row3:number,col3:number){
    this.winningSum=this.arr[row1][col1]+this.arr[row2][col2]+this.arr[row3][col3];
    if(this.winningSum==0){
      this.win=1;
      this.scores.emit({xscore:0,oscore:1});
      this.player='Player2';
      this.imageSource='https://img.freepik.com/premium-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg'
    }
    else if(this.winningSum==3){
      this.win=1;
      this.scores.emit({xscore:1,oscore:0});
      this.player='Player1';
      this.imageSource='https://img.freepik.com/premium-vector/pro-gamer-avatar-logo_71220-49.jpg?w=2000'
    }
    if(this.win==1){
      this.arr[row1][col1]=10;
      this.arr[row2][col2]=10;
      this.arr[row3][col3]=10;
      this.openModel();
      return true;
    }
    return false;
  }
 
  openModel(){
    setTimeout(() => {
      (document.getElementById("myModal")as HTMLDialogElement).showModal();
    }, 1000);
  }

  newGame(){
    (document.getElementById("myModal") as HTMLDialogElement).close();
    this.reset();
  }

  reset(){
    document.querySelectorAll('input').forEach(ele=> ele.value='');
    for(var i=0;i<3;i++){
      this.arr=[[2,2,2],[2,2,2],[2,2,2]];
      this.win=0;
      this.draw=0;
      this.xinputCount=0;
      this.oinputCount=0;
      this.totalInputCount=0;
    }
  }

}
