import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros
import { SummonerService } from 'src/app/services/summoner.service';

@Component({
  selector: 'app-championinfo',
  templateUrl: './championinfo.component.html',
  styleUrls: ['./championinfo.component.css'],
  providers:[SummonerService]
})
export class ChampioninfoComponent implements OnInit {
  public championname:string = "";
  public champinfo:any = {};  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _summonerservice: SummonerService,
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=>{
      this.championname = params['id'];

      this.getchampinfo()


      if(this.championname == null){
        this._router.navigate(['/champions']);
      }
    });
  }

  getchampinfo(){
    this._summonerservice.getChampinfo(this.championname).subscribe(
      response =>{
         this.champinfo = response;
         this.champinfo = this.champinfo.data[this.championname];
         console.log(this.champinfo);
      },
      error =>{
       console.log(<any>error);
      }
   ); 
  }

}
