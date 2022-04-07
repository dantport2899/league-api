import { Component, OnInit, ViewChild } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Summoner:any = "Summoner";
  title = 'league-api';

  constructor(
    // private _currentsummoner: CurrentsummonerService
    ) { }

  ngOnInit(): void {
  //  this._currentsummoner.currentsummoner.subscribe((data: any) =>{
  //    console.log("recibiendo data...", data);
  //  });
  }

  getSummoner(){
    this.Summoner = localStorage.getItem('currentsummoner');
  }

}
