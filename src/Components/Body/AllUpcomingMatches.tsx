import React from "react";
import styled from 'styled-components';

const StyledGridTable = styled.div`
    text-align:center;
    display:grid;
    grid-template-columns: 150px 270px 250px 220px 200px;
    
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
const StatusSpan = styled.span`
    text-transform:capitalize
`
const AllUpcomingMatches = ({...props}) => {
    return(
        <div>
            <StyledGridTable>
                <HeaderDiv>Match</HeaderDiv>
                <HeaderDiv>Home</HeaderDiv>
                <HeaderDiv>Away</HeaderDiv>
                <HeaderDiv>Date</HeaderDiv>
                <HeaderDiv>Status</HeaderDiv>
            </StyledGridTable>
            {props.data.matches.map((a: { id: string | number | undefined; homeTeam: { id: string; name: string; }; awayTeam: { id: string; name: string; };utcDate:string; status:string },b: number)=>(
                <StyledGridTable key={a.id}>
                    <BodyDiv>
                        <StyledA href={`/match/`+a.id}>Match {b+1}:</StyledA>
                    </BodyDiv>
                    <BodyDiv>
                        <StyledA href={`/team/`+a.homeTeam.id}>{a.homeTeam.name}</StyledA>
                    </BodyDiv>
                    <BodyDiv>
                        <StyledA href={`/team/`+a.awayTeam.id}> {a.awayTeam.name}</StyledA>
                    </BodyDiv>
                    <BodyDiv>
                    <StyledA href={`/match/`+a.awayTeam.id}> {a.utcDate.replace(/T/g, ' ').slice(0,a.utcDate.length-4)}</StyledA>
                    </BodyDiv>
                    <BodyDiv>
                       <StatusSpan> {a.status.toLowerCase()}</StatusSpan>
                    </BodyDiv>
                </StyledGridTable>
                        ))}
        </div>
    )


}

export default AllUpcomingMatches;