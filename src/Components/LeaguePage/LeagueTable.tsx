import React,{FunctionComponent, useState, useEffect} from 'react';
import NationalLeague from './NationalLeague'
import styled from 'styled-components';
import LoadingIcon from '../LoadingIcon';
import axios from 'axios'
const StyledTableDiv = styled.div`
margin-top:50px;`
const StyledGridTable = styled.div`   
    text-align:center;
    display:grid;
    grid-template-columns: 100px 280px 150px 120px 100px ;
    
    :nth-of-type(odd){
        background-color:rgba(0, 177, 59, 0.735);
    }
    `
    const HeaderDiv = styled.div`
    color:#0247d9;
    background-color:rgba(0, 177, 59, 0.735);
    padding:10px 0;
    font-weight:bold;
    font-size:20px;
    `
const BodyDiv = styled.div`
    color:#0247d9;
    font-weight:bolder;
    padding:10px;
    
`
const LoadingDiv = styled.div`
display:flex;
justify-content:center;
margin-top:15px ;
`
const FilterSelect = styled.ul`
    
    cursor:pointer;
    list-style-type:none;
    padding:5px 15px;
    justify-content: center;
    display: ${({league}) =>
    league === 'CL' && 'flex' ||
    league !== 'CL' && 'none'
}
`
const FilterOption = styled.li`
    padding:0 5px;
`
const FilterButton = styled.button`
    padding:5px 10px;
    cursor:pointer;
    background:#003bb8;
    color:#EBFFEB;
    border-radius:5px;
    border-color:#003bb8;
`
interface Team{
    name?:string;
    id?:number,
}
interface StandingTable{
    position?:number;
    team:Team;
    playedGames?:number;
    goalsFor?:number;
    goalsAgainst?:number;
}
interface StandingChild{
    table:Array<any>;
}
interface Standings{
    standings:StandingChild,
}
interface StandingsType{
    standings:Standings;
}





const LeagueTable:FunctionComponent<{id:string}> = (props) => {
    const [filterLeague, setFilter] = useState<string>('A');
    const [defaultTable, setDefaultTable] = useState<Array<any>>([]);
    const [leagueTable, setLeagueTable] = useState<Array<object>>([]);
    const [isTableLoading, setIsTableLoading] = useState(true)
    useEffect(() =>{
    
        const fetchStandings = async(url: string)=> {
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
            const result = await axios({method:'GET',
            url: proxy+url,
            headers:{
                'X-Auth-Token':'eea93b6682e94ab9b2bff2c734e753de',
                
            }});
            setLeagueTable(result.data)
            setDefaultTable(result.data['standings'][0])
            setIsTableLoading(false)
        }catch (error){
            console.log(error)
        }
        }
        fetchStandings('http://api.football-data.org/v2/competitions/'+ props.id +'/standings');
        
    }, [props.id]);


    useEffect(()=>{
        let currentFilter:Array<any>;
        
        if(isTableLoading === false){
            currentFilter = leagueTable['standings'].filter((a:{type:string, group:string})=> a.type==="TOTAL" && a.group === `GROUP_${filterLeague}`);
            setDefaultTable(currentFilter[0]);
        }
        
    },[filterLeague,leagueTable, isTableLoading]);
    

    if(isTableLoading === false){
    return(
        <div>
            <FilterSelect league={props.id}>
                <FilterOption >
                    <FilterButton value="A" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Group A</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="B" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Group B</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="C" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Group C</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="D" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Group D</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="E" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Group E</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="F" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Group H</FilterButton>
                </FilterOption>
            </FilterSelect>
        <StyledTableDiv>
            <StyledGridTable >
                <HeaderDiv>
                    Position
                </HeaderDiv>
                <HeaderDiv>
                    Team
                </HeaderDiv>
                <HeaderDiv>
                    Played Games
                </HeaderDiv>
                <HeaderDiv>
                    Goals
                </HeaderDiv>
                <HeaderDiv>
                    Points
                </HeaderDiv>
        </StyledGridTable>
        
        
            {defaultTable['table'].map((a: { position: number; team: { id: string; name: string; }; playedGames: number; goalsFor:number; goalsAgainst: number; goalDifference: number; points: number; },b: string | number | undefined) => 
               <NationalLeague key={b} a={a}/>
            )}
            
        </StyledTableDiv>
        </div>
        
    )}
    return(
        <LoadingDiv><LoadingIcon/></LoadingDiv>
    )
}

export default LeagueTable;