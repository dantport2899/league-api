import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";
import { Global } from "./global";
import { Summoner} from "../models/summoner"

@Injectable()
export class SummonerService{
    public url:string;
    public key:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
        this.key = Global.key;
    }

    testService(){
        return "Probando el servicio de angular";
    }

    getSummoner(summonername:string):Observable<any>{
             return this._http.get('/lol/summoner/v4/summoners/by-name/'+summonername,{headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            'Access-Control-Allow-Origin': '*',
            'X-Riot-Token': this.key
        }});        
    }
}