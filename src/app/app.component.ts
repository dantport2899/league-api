import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Summoner:string = "Summoner";
  title = 'league-api';

  ngOnInit(): void {
    
  }

  getSummoner(event:any){
    this.Summoner= event;
  }

}
