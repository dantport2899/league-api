import { Component, OnInit, Input } from '@angular/core';
import { SummonerService } from 'src/app/services/summoner.service';

@Component({
  selector: 'app-hystory',
  templateUrl: './hystory.component.html',
  styleUrls: ['./hystory.component.css']
})
export class HystoryComponent implements OnInit {
  public matchlist!:any;
  public matchinfolist!:any;

  @Input() summonerpuuid!:string;

  constructor(private _summonerservice: SummonerService) { }

  ngOnInit(): void {
    this.getMatchlist(this.summonerpuuid);
  }

  getMatchlist(summonerpuuid:string){
    this._summonerservice.getMatchlist(summonerpuuid).subscribe(
      response =>{
         this.matchlist = response;

         this.matchlist.forEach((element: string) => {
          this.getMatchinfo(element);
        });

        this.matchlist.splice(0, 10);

        console.log(this.matchlist);

      },
      error =>{
       console.log(<any>error);
      }
   );
  }

  getMatchinfo(matchid:string){
    this._summonerservice.getMatchinfo(matchid).subscribe(
      response =>{
         this.matchlist.push(response); 
      },
      error =>{
       console.log(<any>error);
      }
   );
  }
  
}
