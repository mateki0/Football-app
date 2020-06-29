import React from 'react'
import styled from 'styled-components';

const SeasonInfo = styled.div`
    display:flex;  
    flex-direction:column;`
const CurrentDiv = styled.div`
    display:flex;
    align-items:center;
`
const CurrentSeason = styled.h1`
    color:#0247d9;
    text-align:center;
`
const CurrentDates = styled.span`
    color:#0247d9;
    font-size:18px;
    padding:0 20px;
`
const LeagueFilterBody = (props) =>{
    
    if(props.isLoading === false){
    return(
        
            <SeasonInfo>
                    <CurrentSeason>Current Season {props.league.currentSeason.startDate.slice(0,4)}/{props.league.currentSeason.endDate.slice(0,4)}:</CurrentSeason>
                    <CurrentDiv>
                        <CurrentDates>Started: {props.league.currentSeason.startDate}</CurrentDates>
                        <CurrentDates>Current round: {props.league.currentSeason.currentMatchday}</CurrentDates>
                        <CurrentDates>Ending: {props.league.currentSeason.endDate}</CurrentDates>
                        
                    </CurrentDiv>
                </SeasonInfo>
        
    )}
    return(
        <div>Loading</div>
    )
}
export default LeagueFilterBody;