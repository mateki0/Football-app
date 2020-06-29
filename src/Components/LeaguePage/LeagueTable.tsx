import React,{FunctionComponent} from 'react'
import styled from 'styled-components';

const StyledTableDiv = styled.div`
margin-top:50px;`
const StyledGridTable = styled.div`   
    justify-content:center;
    align-items:center;
    text-align:center;
    display:grid;
    grid-template-columns: 100px 280px 150px 120px 100px ;
    grid-template-areas:
    "pos team played goals points";
    padding-bottom:20px;
    `
const PosDiv = styled.div`
    grid-area:pos;
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
`

const TeamDiv =  styled.div`
    grid-area: team;
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
`
const PlayedDiv  = styled.div`
    grid-area: played;
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
`
const GoalsDiv = styled.div`
    grid-area: goals;
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
` 
const PointsDiv  = styled.div`
    grid-area:points;
    border:1px solid #fff;
    margin: 0 -1px -1px 0;
    font-weight:bold;
    padding:5px;
`
const TeamNameHref = styled.a`
    color:black;


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
            <PosDiv>
              Position
            </PosDiv>
            <TeamDiv>
                Team
            </TeamDiv>
            <PlayedDiv>
                Played Games
            </PlayedDiv>
            <GoalsDiv>
                Goals
            </GoalsDiv>
            <PointsDiv>
                Points
            </PointsDiv>
        </StyledGridTable>
            
             {props.standings.standings[0].table.map((a,b) => 
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