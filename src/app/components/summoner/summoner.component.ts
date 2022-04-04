import { Component, OnInit, Output, EventEmitter } from '@angular/core'; //importar view child para leer los componentes
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import { SummonerService } from 'src/app/services/summoner.service';
import { Summoner } from 'src/app/models/summoner';
import { Summonerleague } from 'src/app/models/summonerleague';
import { Summonermastery } from 'src/app/models/summonermastery';
import { Championmastery } from 'src/app/models/championmastery';
import { Champion } from 'src/app/models/champion';

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
  public summonermastery!: Summonermastery;
  public championmastery: Championmastery[]=[];

  public championsarray: Champion[]=[];
  public champions:any = {};

  public summonername:string = "Summoner";
  public servercode:string="";
  public encryptedsummonerid:string="";

  @Output() summonerEmit = new EventEmitter();

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
      this.summonerEmit.emit(this.summonername);
      this.getallchampions()

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

          this.getSummonerleague(this.encryptedsummonerid);
          this.getSummonerMastery(this.encryptedsummonerid);
          this.getChampionMastery(this.encryptedsummonerid);

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
      },
      error =>{
       console.log(<any>error);
      }
   );
  }

  getSummonerMastery(encryptedsummonerid:string){
    this._summonerservice.getSummonerMastery(encryptedsummonerid).subscribe(
      response =>{
         this.summonermastery = response;
      },
      error =>{
       console.log(<any>error);
      }
   );
  }

  getChampionMastery(encryptedsummonerid:string){
    this._summonerservice.getChampionMastery(encryptedsummonerid).subscribe(
      response =>{
         this.championmastery = response;
      },
      error =>{
       console.log(<any>error);
      }
   );
  }

  getallchampions(){
    this._summonerservice.getAllchampions().subscribe(
      response =>{
        //  this.summonerleagues = response;
        this.champions  = response;
        this.champions = this.champions.data;
        
        for(let key in this.champions){  
          if(this.champions.hasOwnProperty(key)){  
            this.championsarray.push(this.champions[key]);  
          }  
         }
         
        console.log(this.championsarray);
      },
      error =>{
       console.log(<any>error);
      }
   );
  }  

  // getchampinfo(keyid:number)  getchampinfo(keyid:number){
  //   return this.championmastery.find(key => keyid == keyid )
  // }

}
