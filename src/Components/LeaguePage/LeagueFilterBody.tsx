import React from 'react'
import styled from 'styled-components';
const StyledMain = styled.main`
    margin-left:250px;
`
const CurrentDiv = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`
const CurrentSeason = styled.h2`
    color:#fff;
    text-align:center;
`
const CurrentDates = styled.span`
    color:#fff;
    font-size:18px;
    padding:0 5px;
`
const LeagueFilterBody = (props) =>{
    
    if(props.isLoading === false){
    return(
        
            <div>
                    <CurrentSeason>Current Season {props.league.currentSeason.startDate.slice(0,4)}/{props.league.currentSeason.endDate.slice(0,4)}:</CurrentSeason>
                    <CurrentDiv>
                        <CurrentDates>Started: {props.league.currentSeason.startDate}</CurrentDates>
                        <CurrentDates>Current round: {props.league.currentSeason.currentMatchday}</CurrentDates>
                        <CurrentDates>Ending: {props.league.currentSeason.endDate}</CurrentDates>
                        
                    </CurrentDiv>
                </div>
        
    )}
    return(
        <div>Loading</div>
    )
}
export default LeagueFilterBody;