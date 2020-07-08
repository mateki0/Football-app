export interface ISquad{
    id:number,
    name:string,
    position:string,
    dateOfBirth:string,
    countryOfBirth:string,
    nationality:string,
    role:string,
}
export interface IResultData{
    clubColors:string,
    crestUrl:string,
    id:number,
    name:string,
    venue:string,
    squad:ISquad,
}