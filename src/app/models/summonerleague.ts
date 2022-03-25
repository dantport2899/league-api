export class Summonerleague{
    constructor(
        public leagueId:string,
        public summonerId:string,
        public summonerName:string,
        public queueType:string,
        public tier:string,
        public rank:string,
        public leaguePoints:number,
        public wins:number,
        public losses:number,
        public hotStreak:boolean,
        public veteran:boolean,
        public freshBlood:boolean,
        public inactive	:boolean,

    ){ }
}