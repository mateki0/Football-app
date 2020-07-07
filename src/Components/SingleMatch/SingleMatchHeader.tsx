import React from 'react';
import styled from 'styled-components';

const SeasonInfo = styled.div`
    display:flex;  
    flex-direction:column;`
const CurrentDiv = styled.div`
    display:flex;
    align-items:center;
`
const League = styled.h1`
    color:#0247d9;
    text-align:center;
    text-transform:capitalize;
`
const CurrentSeason = styled.h2`
    color:#0247d9;
    text-align:center;
`
const CurrentDates = styled.span`
    color:#0247d9;
    font-size:18px;
    padding:0 20px;
`




const SingleMatchHeader = ({...matches}) =>{
    console.log(matches)
    return(
        <SeasonInfo>
                    <League>{matches.match.competition.name} {matches.match.stage.replace(/_/g, ' ').toLowerCase()}</League>
                    <CurrentSeason>Current Season {matches.match.season['startDate'].slice(0,4)}/{matches.match.season['endDate'].slice(0,4)}:</CurrentSeason>
                    <CurrentDiv>
                        <CurrentDates>Started: {matches.match.season['startDate']}</CurrentDates>
                        <CurrentDates>Current round: {matches.match.season['currentMatchday']}</CurrentDates>
                        <CurrentDates>Ending: {matches.match.season['endDate']}</CurrentDates>
                    </CurrentDiv>
        </SeasonInfo>
    )
}
export default SingleMatchHeader;