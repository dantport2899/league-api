import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import { SummonerService } from 'src/app/services/summoner.service';
import { Summoner } from 'src/app/models/summoner';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css'],
  providers:[SummonerService]
})
export class SummonerComponent implements OnInit {
  public summoner!: Summoner;
  public summonername:string = "";
  public servercode:string="";

  constructor(
    private _summonerservice: SummonerService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.summonername = params['summonername'];
      this.servercode = params['server']; //colocar el mas para convertir a tipo numero

      this.getSummoner(this.summonername);

      if(this.summonername == null){
        this._router.navigate(['/start']);
      }
    });
  }

  getSummoner(summonername:string){
    this._summonerservice.getSummoner(summonername).subscribe(
       response =>{
          this.summoner = response;
          console.log(this.summoner.summonerLevel);
       },
       error =>{
        console.log(<any>error);
       }
    )
  }

}
