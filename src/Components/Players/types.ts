interface IPlayer{
    id:number,
    name:string,
    firstName:string,
    lastName:string | null,
    dateOfBirth:string,
    nationality:string,
    position:string
}
interface ITeam{
    id:number,
    name:string
}
interface IScorers{
    numberOfGoals:number,
    player:IPlayer,
    team:ITeam
 }
export interface IPropTypes{
    scorers:IScorers,
}