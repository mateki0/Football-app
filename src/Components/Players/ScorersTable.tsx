import React,{FunctionComponent} from 'react';
import styled from 'styled-components';
const StyledMain = styled.main`
    margin:75px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const StyledGridTable = styled.div`   
    text-align:center;
    display:grid;
    grid-template-columns: 250px 100px 100px 250px 150px ;
    grid-template-areas:
    "name goals pos team nationality"
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
color:#0247d9;
font-weight:bolder;
    padding:10px;
    
`
const Competitions = styled.h2`
font-weight:bold;
`
const TeamNameHref = styled.a`
    color:#0247d9;
`
const ScorersTable:FunctionComponent<{players: any, isPlayersLoading:boolean}> = (props) =>{
    console.log(props.isPlayersLoading)
    if(props.isPlayersLoading === false){
    return(
        <StyledMain>
            <Competitions>Premier League</Competitions>
                <StyledGridTable >
                    <HeaderDiv>
                        Name
                    </HeaderDiv>
                    <HeaderDiv>
                        Goals
                    </HeaderDiv>
                    <HeaderDiv>
                        Position
                    </HeaderDiv>
                    <HeaderDiv>
                        Team
                    </HeaderDiv>
                    <HeaderDiv>
                        Nationality
                    </HeaderDiv>
                </StyledGridTable>
                {props.players.scorers.map((a:{player:{name:string; id:number; nationality:string; position:string}; team:{id:number; name:string};numberOfGoals:number }, b: string | number | undefined) =>
                    <StyledGridTable key={b}>
                        <BodyDiv>
                        <TeamNameHref href={`/players/`+a.player.id}>{a.player.name}</TeamNameHref>
                        </BodyDiv>
                        <BodyDiv>
                            {a.numberOfGoals}
                        </BodyDiv>
                        <BodyDiv>
                            {a.player.position}
                        </BodyDiv>
                        <BodyDiv>
                        <TeamNameHref href={`/team/`+a.team.id}>{a.team.name}</TeamNameHref>
                        </BodyDiv>
                        <BodyDiv>
                            {a.player.nationality}
                        </BodyDiv>
                    </StyledGridTable>
                )}
        </StyledMain>
    )
    }
    return(
        <div>Loading...</div>
    )
}

export default ScorersTable;