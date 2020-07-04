import React,{useEffect, useState} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import LoadingIcon from '../LoadingIcon';
import moment from 'moment';

const StyledMain = styled.main`
    margin:75px auto 0 auto;
    height:100%;
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const TeamName = styled.h1`
    color:#0247d9;
    font-size:36px;
    font-weight:900;
    
`
const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    margin-top:15px ;
`
const TeamInfo = styled.div`
    width:80%;
    display:flex;
    margin-bottom:40px;
`
const Info = styled.h3`
    margin:0;
    font-weight:600;
    color:#0247d9;
    text-align:center;
`
const InfoHeaders = styled.h1`
    font-weight:900;
    color:#0247d9;
    text-align:center;
`
const PairDivs = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex-grow:1;
`
const CrestDiv = styled.div`
    width:150px;
    height:auto;
`
const Crest = styled.img`
    width:100%;
    height:auto;

`
const StyledGridTable = styled.div`
    text-align:center;
    display:grid;
    grid-template-columns: 220px 220px 220px 220px;
    
    :nth-of-type(odd){
        background-color:rgba(0, 177, 59, 0.835);
    }
    `
    const HeaderDiv = styled.div`
    color:#0247d9;
    background-color:rgba(0, 177, 59, 0.835);
    padding:10px 0;
    font-weight:bold;
    font-size:20px;
`
const BodyDiv = styled.div`
    color:#1963ff;
    font-weight:bolder;
    padding:10px;
`
const StyledA = styled.a`
    padding:5px;
    font-size:18px;
    color:#004ef5;
`

const FilterSelect = styled.ul`
    display:flex;
    
    cursor:pointer;
    
    list-style-type:none;
    padding:5px 15px;
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
const TeamTable = () =>{
    let {id} = useParams();
    const [team, setTeam] = useState<Array<object>>([]);
    const [squad, setSquad] = useState<Array<object>>([])
    const [isTeamLoading, setIsTeamLoading] = useState(true);
    const [filter, setFilter] = useState<string>('All');
        interface TeamType{
        name:string;
        id:number;
        position:string;
        nationality:string;
        role:string;
        dateOfBirth:string;
    }
    interface Mapped{
        a:TeamType;
    }
    useEffect(()=>{
        const fetchTeam = async (url:string)=>{
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
              const result = await axios({method:'GET',
              url: proxy+url,
              headers:{
                  'X-Auth-Token': process.env.REACT_APP_API_KEY,
              }});
              setTeam(result.data);
              setSquad(result.data['squad'])
              setIsTeamLoading(false);
            }catch (error){
                console.log(error)
            }
          }
          fetchTeam(`http://api.football-data.org/v2/teams/${id}`)
    },[id])
    
    
    useEffect(() =>{
        let currentFilter:Array<any>;
        console.log(filter)
        if(filter === 'Forwards'){
            currentFilter = team['squad'].filter((a: { position: string; })=> {return a.position === 'Attacker'});
            setSquad(currentFilter)
        } else if(filter === 'Midfielders'){
            currentFilter = team['squad'].filter((a: { position: string; })=> {return a.position === 'Midfielder'});
            setSquad(currentFilter)
        } else if(filter === "Defenders"){
            currentFilter = team['squad'].filter((a: { position: string; })=> {return a.position === 'Defender'});
            setSquad(currentFilter)
        } else if(filter === "Goalkeepers"){
            currentFilter = team['squad'].filter((a: {position:string;}) => { return a.position === "Goalkeeper"});
            setSquad(currentFilter);
        } else if(filter === "Coach"){ 
            currentFilter = team['squad'].filter((a: {role:string;}) => {return a.role === "COACH"});
            setSquad(currentFilter);
        } else {
            setSquad(team['squad']);
        }
    }, [filter,team])
    
    if(isTeamLoading === false){
        
return(

    <StyledMain>
        
        <TeamName>{team['name']}</TeamName>
                <CrestDiv>
                    <Crest src={team['crestUrl']}/>
                </CrestDiv>
        <TeamInfo>
            <PairDivs>
                <InfoHeaders>Stadium:</InfoHeaders>
                <Info>{team['venue']}</Info>
            </PairDivs>
            <PairDivs>
                <InfoHeaders>Club Colors:</InfoHeaders>
                <Info>{team['clubColors']}</Info>
            </PairDivs>
        </TeamInfo>
        <FilterSelect >
                <FilterOption >
                    <FilterButton value="All" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>All</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="Goalkeepers" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Goalkeepers</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="Defenders" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Defenders</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="Midfielders" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Midfielders</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="Forwards" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Forwards</FilterButton>
                </FilterOption>
                <FilterOption>
                    <FilterButton value="Coach" onClick={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>setFilter(e.currentTarget.value)}>Coach</FilterButton>
                </FilterOption>
            </FilterSelect>
        <StyledGridTable>
            <HeaderDiv>Name</HeaderDiv>
            <HeaderDiv>Position</HeaderDiv>
            <HeaderDiv>Age</HeaderDiv>
            <HeaderDiv>Nationality</HeaderDiv>
        </StyledGridTable>
        {squad.map((a, b) => (
            <StyledGridTable key={b}>
                <BodyDiv><StyledA href={`/player/${a['id']}`}>{a['name']}</StyledA></BodyDiv>
                <BodyDiv>{a['position'] === null ? a['role'] : a['position']}</BodyDiv>
                <BodyDiv>{moment().diff(a['dateOfBirth'], 'years')}</BodyDiv>
                <BodyDiv><StyledA>{a['nationality']}</StyledA></BodyDiv>
            </StyledGridTable>
        ))}
    </StyledMain>
    )
}
return (
    <LoadingDiv><LoadingIcon/></LoadingDiv>
)
}

export default TeamTable;