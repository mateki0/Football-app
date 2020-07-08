interface IArea{
    id:number,
    name:string,
}
interface ICompetition{
    area:IArea,
    code:string,
    id:number,
    name:string
}
interface ITeam{
    id:number,
    name:string
}
interface IMatches{
    awayTeam:ITeam,
    group:string,
    homeTeam:ITeam,
    id:number,
    matchday:number,
    stage:string,
    status:string,
    utcDate:string,
}
interface IMatchesType{
    
    count:number;
    matches:IMatches;
    competition:ICompetition;

}
export interface IDataType{
    matches:IMatchesType;
}