import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';  //servicios para rutas con parametros

@Component({
  selector: 'app-championinfo',
  templateUrl: './championinfo.component.html',
  styleUrls: ['./championinfo.component.css']
})
export class ChampioninfoComponent implements OnInit {
  public championname:string = "";

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=>{
      this.championname = params['id'];



      if(this.championname == null){
        this._router.navigate(['/champions']);
      }
    });
  }

}
