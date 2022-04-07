import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import { AppModule } from 'src/app/app.module';


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
  constructor(
    private _router:Router
    // private _currentsummoner: CurrentsummonerService
    ) { }

  ngOnInit(): void {
    
  }

  seeSummoner(){
    localStorage.setItem('currentsummoner', this.summonername);
    localStorage.setItem('currentserver', this.server);
    // this._currentsummoner.currentsummoner.emit({
    //   data:this.summonername
    // });

    this._router.navigate(['/summoner/'+this.server+'/'+this.summonername]);
  }

 

}
