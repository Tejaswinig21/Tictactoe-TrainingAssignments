
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  // @Output() activated=new EventEmitter();
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // ActivateMainPage(){

  //   this.activated.emit();
  // }
  // gotoGamePage(){
  //   this.router.navigate([`/GamePage`]);
  // }
}
