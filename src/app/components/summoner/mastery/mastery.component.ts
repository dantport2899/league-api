import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Champion } from 'src/app/models/champion';

@Component({
  selector: 'app-mastery',
  templateUrl: './mastery.component.html',
  styleUrls: ['./mastery.component.css']
})
export class MasteryComponent implements OnInit {
  @Input() summonermastery!: any;
  @Input() championmastery!: any;
  @Input() championsarray: Champion[]=[];

  constructor(
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  getchest(){
    
  }

  
  getChampinfo(id:string){
    var key = this.championsarray.find(x => x.key == id);
    return key?.id;
  }

  seeChamp(champ:string){
    this._router.navigate(['/champions/champion/'+champ]);
  }

}
