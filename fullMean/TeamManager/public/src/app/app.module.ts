import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TeamService } from "./team.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageplayersComponent } from './manageplayers/manageplayers.component';
import { PlayerstatusComponent } from './playerstatus/playerstatus.component';
import { ListComponent } from './manageplayers/list/list.component';
import { NewplayerComponent } from './manageplayers/newplayer/newplayer.component';
import { GameoneComponent } from './playerstatus/gameone/gameone.component';
import { GametwoComponent } from './playerstatus/gametwo/gametwo.component';
import { GamethreeComponent } from './playerstatus/gamethree/gamethree.component';
@NgModule({
  declarations: [
    AppComponent,
    ManageplayersComponent,
    PlayerstatusComponent,
    ListComponent,
    NewplayerComponent,
    GameoneComponent,
    GametwoComponent,
    GamethreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
