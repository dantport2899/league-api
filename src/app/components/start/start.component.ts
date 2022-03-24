import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros


@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public summonername:string = "";
  public server:string="LA1";
  public servers:Array<string> = [
    'LA1',
    'NA1',
    'LA2',
    'EUW1'
  ]
  constructor( private _router:Router) { }

  ngOnInit(): void {
  }

  seeSummoner(){
    this._router.navigate(['/summoner/'+this.server+'/'+this.summonername]);
  }

}
