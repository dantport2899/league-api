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

    getSummonerleague(encryptedsummonerid:string):Observable<any>{
        return this._http.get('/lol/league/v4/entries/by-summoner/'+encryptedsummonerid,{headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
       'Access-Control-Allow-Origin': '*',
       'X-Riot-Token': this.key
        }});        
    }

    getSummonerMastery(encryptedsummonerid:string):Observable<any>{
        return this._http.get('/lol/champion-mastery/v4/scores/by-summoner/'+encryptedsummonerid,{headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
       'Access-Control-Allow-Origin': '*',
       'X-Riot-Token': this.key
        }});        
    }

    getChampionMastery(encryptedsummonerid:string):Observable<any>{
        return this._http.get('/lol/champion-mastery/v4/champion-masteries/by-summoner/'+encryptedsummonerid,{headers: {
       'Content-Type': 'application/json',
       'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
       'Access-Control-Allow-Origin': '*',
       'X-Riot-Token': this.key
        }});        
    }

    getAllchampions(){
        return this._http.get('/cdn/12.5.1/data/en_US/champion.json',{headers: { 'Content-Type': 'application/json' }});   
    }

    getChampinfo(champname:string){
        return this._http.get('/cdn/12.6.1/data/en_US/champion/'+champname+".json",{headers: { 'Content-Type': 'application/json' }});   
    }
}