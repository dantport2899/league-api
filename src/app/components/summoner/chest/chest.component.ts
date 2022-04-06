import { Component, OnInit, Input } from '@angular/core';
import { Champion } from 'src/app/models/champion';
import { SummonerService } from 'src/app/services/summoner.service';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.css']
})
export class ChestComponent implements OnInit {
  public orderchest:any;

  @Input() summonermastery!: any;
  @Input() encryptedsummonerid!:string;
  @Input() championsarray: Champion[]=[];

  constructor(private _summonerservice: SummonerService) { }

  ngOnInit(): void {
    this.getChampionMastery(this.encryptedsummonerid);
  }

  getChampionMastery(encryptedsummonerid:string){
    this._summonerservice.getChampionMastery(encryptedsummonerid).subscribe(
      response =>{
         this.orderchest = response;
         
        this.orderchest.sort((a:any, b:any) => a.chestGranted > b.chestGranted ? -1 : a.chestGranted < b.chestGranted ? 1 : 0);

      },
      error =>{
       console.log(<any>error);
      }
   );
  }

  

  getChampinfo(id:string){
    var key = this.championsarray.find(x => x.key == id);
    return key?.id;
  }

}
