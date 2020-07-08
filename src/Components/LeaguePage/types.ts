interface IArea{
    id:number,
    name:string
}

interface ICurrSeason{
    id:number,
    startDate:string,
    endDate:string,
    currentMatchday:number,
    winner:string | null
}



export interface ILeagueProps{
    area:IArea
    code:string,
    currentSeason:ICurrSeason,
    id:number,
    name:string
}
interface ITeam{
    id:number,
    name:string,
    crestUrl:string,
}
interface ITable{
    draw:number,
    goalDifference:number,
    goalsAgainst:number,
    goalsFor:number,
    lost:number,
    playedGames:number,
    points:number,
    position:number,
    team:ITeam,
    won:number,
}
export interface IStandings{
    stage:string,
    type:string,
    group:string,
    table: ITable
}
export interface ILeagueTableProps{
    standings:IStandings,
}