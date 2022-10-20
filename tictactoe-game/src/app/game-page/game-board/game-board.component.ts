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
  win:number=0;
  player='';
  winningSum:number=10;
  playerTurn:boolean=false;
  totalInputCount:number=0;
  imageSource='';
  @Output() scores=new EventEmitter<{xscore:number,oscore:number}>();
  

  play(row:number,col:number,event:Event){
    var inputValue=(event.target as HTMLInputElement).value;
    if(this.playerTurn==false && inputValue=='' ){
      (event.target as HTMLInputElement).value='X';
      this.playerTurn=true;
      this.arr[row][col]=1;
    }
    else if(this.playerTurn==true && inputValue==''){
      (event.target as HTMLInputElement).value='O';
      this.playerTurn=false;
      this.arr[row][col]=0;
    }
    this.totalInputCount+=1;
    if(this.totalInputCount>4){
      this.check();
    }
  }
  
  check(){

    for(let i=0;i<3;i++){
      if((this.arr[i][0]!=2 && this.arr[i][1]!=2 && this.arr[i][2]!=2 && this.checkWinner(i,0,i,1,i,2)) || (this.arr[0][i]!=2 && this.arr[1][i]!=2 && this.arr[2][i]!=2 && this.checkWinner(0,i,1,i,2,i))){
        return;
      }
    }
    if (this.arr[0][0] != 2 && this.arr[1][1] != 2 && this.arr[2][2] != 2 && this.checkWinner(0,0,1,1,2,2)) {
      return;
    }
    if (this.arr[0][2] != 2 && this.arr[1][1] != 2 && this.arr[2][0] != 2 && this.checkWinner(0,2,1,1,2,0)) {
      return;
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

  getColor(){
    if(this.playerTurn==true){
      return 'red';
    }
    else{
      return 'yellow'
    }
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
      this.totalInputCount=0;
    }
  }

}
