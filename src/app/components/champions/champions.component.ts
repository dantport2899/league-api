import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import { SummonerService } from 'src/app/services/summoner.service';
import { Champion } from 'src/app/models/champion';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.css'],
  providers: [SummonerService]
})
export class ChampionsComponent implements OnInit {
  public championsarray: Champion[]=[];
  public champions:any = {};

  constructor(
    private _summonerservice: SummonerService
  ) { }

  ngOnInit(): void {
    this.getallchampions();
  }

  getallchampions(){
    this._summonerservice.getAllchampions().subscribe(
      response =>{
        //  this.summonerleagues = response;
        this.champions  = response;
        this.champions = this.champions.data;
        this.championsarray = this.champions;

        console.log(this.championsarray);
      },
      error =>{
       console.log(<any>error);
      }
   );
  }

}
