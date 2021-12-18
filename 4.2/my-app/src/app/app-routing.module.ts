import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiHolderComponent } from './api-holder/api-holder.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  {path: '', redirectTo: 'game', pathMatch:'full'},
  {path: 'game/:gameId', component:ApiHolderComponent},
  {path: 'game', component:ApiHolderComponent},
  {path: 'new-game', component: NewGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
