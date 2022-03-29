import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { SummonerComponent } from './components/summoner/summoner.component';
import { ChampionsComponent } from './components/champions/champions.component';
import { ChampioninfoComponent } from './components/championinfo/championinfo.component';
import { ErrorComponent } from './components/error/error.component';

const appRoutes: Routes = [
    {path: '', component: StartComponent},
    {path: 'summoner/:server/:summonername', component: SummonerComponent},
    {path: 'champions', component: ChampionsComponent},
    {path: 'champions/champion/:id', component: ChampioninfoComponent},
    {path: '**', component: ErrorComponent}
  ];
  
 
  export const appRoutingProviders: any[]=[];
  export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);