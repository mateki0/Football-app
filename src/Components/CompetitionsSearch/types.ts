interface IArea{
    id:number,
    name:string,
    countryCode:string,
    ensignUrl:string,
}
interface ICurrSeason{
    id:number,
    startDate:string,
    endDate:string,
    currentMatchday:number,
    winner:string | null
}

export interface ICompTypes{
    area:IArea,
    currentSeason:ICurrSeason,
    id:number,
    name:string,
    plan:string,
}