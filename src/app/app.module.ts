import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';    //IMPORTAR PARA EL USO DE CONSULTAS API
import { FormsModule } from '@angular/forms';               //IMPORTAR PARA EL USO DE FORMULARIOS

import { routing, appRoutingProviders } from './app.routing'; //importar el routing

import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { SummonerComponent } from './components/summoner/summoner.component';
import { ErrorComponent } from './components/error/error.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ChampioninfoComponent } from './components/championinfo/championinfo.component';
import { SpellsComponent } from './components/championinfo/components/spells/spells.component';
import { BiographyComponent } from './components/championinfo/components/biography/biography.component';
import { SkinsComponent } from './components/championinfo/components/skins/skins.component';
import { HystoryComponent } from './components/summoner/hystory/hystory.component';
import { MasteryComponent } from './components/summoner/mastery/mastery.component';
import { ChestComponent } from './components/summoner/chest/chest.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    SummonerComponent,
    ErrorComponent,
    ChampionsComponent,
    ChampioninfoComponent,
    SpellsComponent,
    BiographyComponent,
    SkinsComponent,
    HystoryComponent,
    MasteryComponent,
    ChestComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
