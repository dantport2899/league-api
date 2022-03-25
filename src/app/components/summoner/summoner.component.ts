import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import { SummonerService } from 'src/app/services/summoner.service';
import { Summoner } from 'src/app/models/summoner';
import { Summonerleague } from 'src/app/models/summonerleague';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css'],
  providers:[SummonerService]
})
export class SummonerComponent implements OnInit {
  public summoner!: Summoner;
  public summonerleagues: Summonerleague[]=[];

  public summonername:string = "";
  public servercode:string="";
  public encryptedsummonerid:string="";
  public winrate:number=0;
  public winrate2:number=0;
  public sololeague:string="";
  public flexleague:string="";

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
          this.encryptedsummonerid = this.summoner.id;
          console.log(this.encryptedsummonerid);

          this.getSummonerleague(this.encryptedsummonerid);

       },
       error =>{
        console.log(<any>error);
       }
    );
  }

  getSummonerleague(encryptedsummonerid:string){
    this._summonerservice.getSummonerleague(encryptedsummonerid).subscribe(
      response =>{
         this.summonerleagues = response;
         console.log(this.summonerleagues);
        this.winrate=(this.summonerleagues[0].wins*100)/(this.summonerleagues[0].wins+this.summonerleagues[0].losses);
        this.winrate = Number(this.winrate);

        this.winrate2=(this.summonerleagues[1].wins*100)/(this.summonerleagues[1].wins+this.summonerleagues[1].losses);
        this.winrate2 = Number(this.winrate2);

        this.geticonleague(this.summonerleagues[0].tier,this.summonerleagues[1].tier);
      },
      error =>{
       console.log(<any>error);
      }
   );
  }

  geticonleague(solo:String,flex:string){
    switch (solo) {
      case "IRON":
        this.sololeague = "Iron";
        break;
        
        case "BRONZE":
        this.sololeague = "Bronze";
        break;

        case "SILVER":
        this.sololeague = "Silver";
        break;

        case "GOLD":
        this.sololeague = "Gold";
        break;

        case "PLATINUM":
        this.sololeague = "Platinum";
        break;

        case "DIAMOND":
        this.sololeague = "Diamond";
        break;

        case "MASTER":
        this.sololeague = "Master";
        break;

        case "GRANDMASTER":
        this.sololeague = "Grandmaster";
        break;

        case "CHALLENGER":
        this.sololeague = "Challenger";
        break;
    
      default:
        this.flexleague = "Unranked";
        break;
    }

    switch (flex) {
      case "IRON":
        this.flexleague = "Iron";
        break;
        
        case "BRONZE":
        this.flexleague = "Bronze";
        break;

        case "SILVER":
        this.flexleague = "Silver";
        break;

        case "GOLD":
        this.flexleague = "Gold";
        break;

        case "PLATINUM":
        this.flexleague = "Platinum";
        break;

        case "DIAMOND":
        this.flexleague = "Diamond";
        break;

        case "MASTER":
        this.flexleague = "Master";
        break;

        case "GRANDMASTER":
        this.flexleague = "Grandmaster";
        break;

        case "CHALLENGER":
        this.flexleague = "Challenger";
        break;
    
      default:
        this.flexleague = "none";
        break;
    }
  }

}
