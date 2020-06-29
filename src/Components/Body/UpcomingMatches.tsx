import React from "react";
import styled from 'styled-components';
const StyledGridTable = styled.div`
    text-align:center;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    "number homeTeam awayTeam";
    padding-bottom:20px;
    `
const HomeTeam = styled.div`
    
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
    grid-area:homeTeam;
    `
const AwayTeam = styled.div`
    
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
    grid-area:awayTeam;
    `
const NumberDiv = styled.div`
    
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    padding:5px;
    grid-area:number;
    
`

const StyledA = styled.a`
    padding:5px;
    font-size:18px;
    color:#fff;
`

const UpcomingMatches = (props) => {
    return(
        <div>
            {props.data.matches.map((a: { id: string | number | undefined; homeTeam: { id: string; name: any; }; awayTeam: { id: string; name: any; }; },b: number)=>(
                <StyledGridTable key={a.id}>
                    <NumberDiv>
                        <StyledA href={`/match/`+a.id}>Match {b+1}:</StyledA>
                    </NumberDiv>
                    <HomeTeam>
                        <StyledA href={`/team/`+a.homeTeam.id}>{a.homeTeam.name}</StyledA>
                    </HomeTeam>
                    <AwayTeam>
                        <StyledA href={`/team/`+a.awayTeam.id}> {a.awayTeam.name}</StyledA>
                    </AwayTeam>
                </StyledGridTable>
                        ))}
        </div>
    )
}

export default UpcomingMatches;