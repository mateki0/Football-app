import React,{useEffect, useState } from 'react';
import {useParams} from 'react-router'
import styled from 'styled-components';
import axios from 'axios'
import SingleMatchHeader from './SingleMatchHeader';
import SingleMatchScore from './SingleMatchScore';
import HeadToHead from './HeadToHead'
import LoadingIcon from '../LoadingIcon';
const StyledMain = styled.main`
    margin:100px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
interface HomeAwayTeam{
    id:number,
    name:string,
    wins:number,
    draws:number,
    losses:number
}
interface H2H{
    numberOfMatches:number,
    totalGoals:number,
    awayTeam:HomeAwayTeam,
    homeTeam:HomeAwayTeam,
}
interface HomeInMatch{
    id:number,
    name:string,
}
interface Area{
    name:string,
    code:string,
    ensignUrl:string,
}
interface Competitions{
    id:number,
    name:string,
    area:Area,
}
interface ScoreInTime{
    homeTeam:null | number
    awayTeam:null | number
}
interface Score{
    winner:string,
    duration:string,
    extraTime:ScoreInTime,
    fullTime:ScoreInTime,
    halfTime:ScoreInTime,
    penalties:ScoreInTime
}
interface Season{
    id:number,
    startDate:string,
    endDate:string,
    currentMatchday:number,
    winner:string | null
}
interface Match{
    awayTeam:HomeInMatch,
    HomeTeam:HomeInMatch,
    competition:Competitions,
    group:string,
    id:number,
    lastUpdate:string,
    matchday:number,
    score:Score
    season:Season,
    stage:string,
    status:string,
    utcDate:string,
    venue:string
}

interface MatchesType{
    head2head:H2H,
    match:Match

}
const SingleMatch = () =>{
    let {id} = useParams();
    const [matches, setMatches] = useState<MatchesType[]>([]);
    const [isMatchesLoading, setIsMatchesLoading] = useState(true);
    useEffect(()=>{
        const fetchMatches = async(url: string) =>{
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
              const result = await axios({method:'GET',
              url: proxy+url,
              headers:{
                  'X-Auth-Token': process.env.REACT_APP_API_KEY,
                  
              }});
              
              setMatches(result.data);
              console.log(result.data)
              setIsMatchesLoading(false);
            }catch (error){
                console.log(error)
            }
          }
            fetchMatches('http://api.football-data.org/v2/matches/'+ id)
        },[id])
        if(isMatchesLoading){
            return <StyledMain><LoadingIcon/></StyledMain>
        }
    return(
        <StyledMain>
            <SingleMatchHeader {...matches}/>
            <SingleMatchScore {...matches}/>
            <HeadToHead {...matches}/>
        </StyledMain>
    )
}
export default SingleMatch;