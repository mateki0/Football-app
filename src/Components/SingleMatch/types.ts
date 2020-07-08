interface IHomeAwayTeam{
    id:number,
    name:string,
    wins:number,
    draws:number,
    losses:number
}
interface IH2H{
    numberOfMatches:number,
    totalGoals:number,
    awayTeam:IHomeAwayTeam,
    homeTeam:IHomeAwayTeam,
}
interface IHomeInMatch{
    id:number,
    name:string,
}
interface IArea{
    name:string,
    code:string,
    ensignUrl:string,
}
interface ICompetitions{
    id:number,
    name:string,
    area:IArea,
}
interface IScoreInTime{
    homeTeam:null | number
    awayTeam:null | number
}
interface IScore{
    winner:string,
    duration:string,
    extraTime:IScoreInTime,
    fullTime:IScoreInTime,
    halfTime:IScoreInTime,
    penalties:IScoreInTime
}
interface ISeason{
    id:number,
    startDate:string,
    endDate:string,
    currentMatchday:number,
    winner:string | null
}
interface IMatch{
    awayTeam:IHomeInMatch,
    HomeTeam:IHomeInMatch,
    competition:ICompetitions,
    group:string,
    id:number,
    lastUpdate:string,
    matchday:number,
    score:IScore
    season:ISeason,
    stage:string,
    status:string,
    utcDate:string,
    venue:string
}

export interface IMatchesType{
    head2head:IH2H,
    match:IMatch

}