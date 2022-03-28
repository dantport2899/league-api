export class Champion{
    constructor(
        public blurb:string,
        public id:string,
        public image:Object,
        public info:Object,
        public key:string,
        public name:string,
        public partype:string,
        public stats:object,
        public tags:[],
        public title:string,
        public version:string,
    ){ }
}