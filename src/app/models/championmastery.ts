export class Championmastery{
    constructor(
        public championPointsUntilNextLevel:string,
        public chestGranted:boolean,
        public championId:string,
        public lastPlayTime:string,
        public championLevel:number,
        public summonerId:string,
        public championPoints:number,
        public championPointsSinceLastLevel:string,
        public tokensEarned:number
    ){ }
}