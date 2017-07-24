import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';
import { PlayerstatusComponent } from './playerstatus/playerstatus.component';
import { ListComponent } from './manageplayers/list/list.component';
import { NewplayerComponent } from './manageplayers/newplayer/newplayer.component';
import { GameoneComponent } from './playerstatus/gameone/gameone.component';
import { GametwoComponent } from './playerstatus/gametwo/gametwo.component';
import { GamethreeComponent } from './playerstatus/gamethree/gamethree.component';

const routes: Routes = [
  // { path: '', redirectTo: '/players/list', pathMatch: 'full'},
  { path: 'player', component: ManageplayersComponent, children:[
      { path: 'list', component: ListComponent },
      { path: 'new', component: NewplayerComponent }
  ]},
  { path: 'status/game', component: PlayerstatusComponent, children:[
      { path: '1', component: GameoneComponent},
      { path: '2', component: GametwoComponent},
      { path: '3', component: GamethreeComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
