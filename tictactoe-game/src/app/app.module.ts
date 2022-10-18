import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { FormsModule } from '@angular/forms';
import { GameBoardComponent } from './game-page/game-board/game-board.component';
import { RouterModule,Routes } from '@angular/router';


const routes: Routes = [
  {path:'gamePage',component:GameBoardComponent},
  {path:'GamePage',component:GamePageComponent},
  {path:'',component:MainPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamePageComponent,
    GameBoardComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
