import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros


@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
  public summonername:string = "";
  public servercode:string="";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params)=>{
      this.summonername = params['summonername'];
      this.servercode = params['server']; //colocar el mas para convertir a tipo numero


      if(this.summonername == null){
        this._router.navigate(['/start']);
      }
    });
  }

}
