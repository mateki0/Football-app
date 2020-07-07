import React from 'react';
import styled from 'styled-components';

const PlaceInfo = styled.div`
    display:flex;
    flex-direction:column;
`
const Time = styled.h2`
    color:#0247d9;
    text-align:center;
    text-transform:capitalize;
    margin:10px 0;
`
const PlayInfo = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap:50px;
`
const Venue = styled.span`
    font-size:20px;
    color:#0247d9;
    text-align:center;
`
const Status = styled.span`
    color:#0247d9;
    font-size:20px;
    text-transform:capitalize;
    text-align:center;
`
const TeamsInfo = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap:50px;
`
const BoldStatus = styled.span`
    font-weight:900;
`
const Team = styled.span`
    color:#0247d9;
    font-size:24px;
    font-weight:700;
    text-align:center;
`
const Winner = styled.div`
    margin-top:20px;
    text-align:center;
`
const TeamScores = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
`
const Score = styled.span`
    color:#0247d9;
    font-weight:600;
    font-size:26px;
`
const SingleMatchScore = ({...matches}) =>{
    return(
        <PlaceInfo>
            <Time>Match Time:</Time>
            <Time>{matches.match.utcDate.replace(/[a-zA-Z]/g, ' ')} GMT</Time>
            <PlayInfo>
                
            <Venue><BoldStatus>Stadium:</BoldStatus> {matches.match.venue}</Venue>
            <Status><BoldStatus>Match Status: </BoldStatus>{matches.match.status.replace(/[^a-zA-Z]/g, " ").toLowerCase()}</Status>
            </PlayInfo>
            <Winner>
               <Team>Winner: </Team> 
               {matches.match.status === "FINISHED" ? 
                <Team>{matches.match.score.winner === 'AWAY_TEAM' ? matches.match.awayTeam.name : matches.match.homeTeam.name}
                </Team>: ''
               }
            </Winner>
            <TeamsInfo>
                <TeamScores>
                <Team>{matches.match.homeTeam.name} </Team> 
                <Score>{matches.match.score.fullTime.homeTeam !== null ? matches.match.score.fullTime.homeTeam : 0}</Score>
                </TeamScores>
                <TeamScores>
                <Team>{matches.match.awayTeam.name} </Team>
                <Score>{matches.match.score.fullTime.awayTeam !== null ? matches.match.score.fullTime.awayTeam : 0}</Score>
                </TeamScores>
            </TeamsInfo>
            
        </PlaceInfo>
    )
}
export default SingleMatchScore;