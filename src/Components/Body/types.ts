interface ITeam{
    id:number,
    name:string,
}
interface IMatches{
    awayTeam:ITeam,
    homeTeam:ITeam,
    group:string,
    id:number,
    matchday:number,
    stage:string,
    status:string,
    utcDate:string,
}

export interface IDefaultBodyProps{
    count:number,
    
}