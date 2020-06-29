import React from "react";
import styled from 'styled-components';
const StyledGridTable = styled.div`
    text-align:center;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
    "number homeTeam awayTeam";
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
const HomeHeader = styled(HeaderDiv)`
    grid-area:homeTeam;

`
const AwayHeader = styled(HeaderDiv)`
    grid-area:awayTeam;

`
const NumberHeader = styled(HeaderDiv)`
    grid-area:number;

`
const BodyDiv = styled.div`
    color:#1963ff;
    font-weight:bolder;
    padding:10px;
`
const HomeTeam = styled(BodyDiv)`
    grid-area:homeTeam;
    `
const AwayTeam = styled(BodyDiv)`
    grid-area:awayTeam;
    `
const NumberDiv = styled(BodyDiv)`
    grid-area:number;
    
`

const StyledA = styled.a`
    padding:5px;
    font-size:18px;
    color:#004ef5;
`

const UpcomingMatches = (props) => {
    return(
        <div>
            <StyledGridTable>
                <NumberHeader>Match</NumberHeader>
                <HomeHeader>Home</HomeHeader>
                <AwayHeader>Away</AwayHeader>
            </StyledGridTable>
            {props.data.matches.map((a: { id: string | number | undefined; homeTeam: { id: string; name: string; }; awayTeam: { id: string; name: string; }; },b: number)=>(
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