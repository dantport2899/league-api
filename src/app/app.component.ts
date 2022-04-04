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

  ngOnInit(): void {
    interval(1000)
    .pipe(takeWhile(() => !stop))
    .subscribe(() => {
      this.getSummoner
    });
  }

  getSummoner(){
    this.Summoner = localStorage.getItem('currentsummoner');
  }

}
