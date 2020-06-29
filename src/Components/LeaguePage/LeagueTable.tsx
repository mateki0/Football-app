import React,{FunctionComponent} from 'react'
import styled from 'styled-components';

const StyledTableDiv = styled.div`
margin-top:50px;`
const StyledGridTable = styled.div`   
    text-align:center;
    display:grid;
    grid-template-columns: 100px 280px 150px 120px 100px ;
    grid-template-areas:
    "pos team played goals points";

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
    const PositionHeader = styled(HeaderDiv)`
grid-area:pos;

`
const TeamHeader = styled(HeaderDiv)`
grid-area:team;

`
const PlayedHeader = styled(HeaderDiv)`
grid-area:played;

`
const GoalsHeader = styled(HeaderDiv)`
grid-area:goals;

`
const PointsHeader = styled(HeaderDiv)`
grid-area:points;

`
const BodyDiv = styled.div`
color:#0247d9;
font-weight:bolder;
    padding:10px;
    
`
const PosDiv = styled(BodyDiv)`
    grid-area:pos;
    
`
const TeamDiv =  styled(BodyDiv)`
    grid-area: team;
`
const PlayedDiv  = styled(BodyDiv)`
    grid-area: played;
`
const GoalsDiv = styled(BodyDiv)`
    grid-area: goals;
` 
const PointsDiv  = styled(BodyDiv)`
    grid-area:points;
`
const TeamNameHref = styled.a`
    color:#0247d9;
`
interface Team{
    name?:string;
    id?:number,
}
interface StandingTable{
    position?:number;
    team:Team;
    playedGames?:number;
    goalsFor?:number;
    goalsAgainst?:number;
}
interface StandingChild{
    table:Array<any>;
}
interface Standings{
    standings:StandingChild,
}
interface StandingsType{
    standings:Standings;
}

const LeagueTable:FunctionComponent<{standings: any, isTableLoading:boolean}> = (props) => {
    console.log(props.standings)
    if(props.isTableLoading === false){
    
    return(
        <StyledTableDiv>
            <StyledGridTable >
                <PositionHeader>
                Position
                </PositionHeader>
                <TeamHeader>
                    Team
                </TeamHeader>
                <PlayedHeader>
                    Played Games
                </PlayedHeader>
                <GoalsHeader>
                    Goals
                </GoalsHeader>
                <PointsHeader>
                    Points
                </PointsHeader>
        </StyledGridTable>
            
            {props.standings.standings[0].table.map((a: { position: number; team: { id: string; name: string; }; playedGames: number; goalsFor:number; goalsAgainst: number; goalDifference: number; points: number; },b: string | number | undefined) => 
                <StyledGridTable key={b}>
                    <PosDiv>
                        {a.position}.
                    </PosDiv>
                    <TeamDiv>
                        <TeamNameHref href={`/team/`+a.team.id}>{a.team.name}</TeamNameHref>
                    </TeamDiv>
                    <PlayedDiv>
                        {a.playedGames}
                    </PlayedDiv>
                    <GoalsDiv>
                        {a.goalsFor}:{a.goalsAgainst}({a.goalDifference})
                    </GoalsDiv>
                    <PointsDiv>
                        {a.points}
                    </PointsDiv>
                </StyledGridTable>
            )} 
        </StyledTableDiv>
    )}
    return(
        <div>Loading</div>
    )
}

export default LeagueTable;