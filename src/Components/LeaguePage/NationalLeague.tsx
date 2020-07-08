import React from 'react';
import styled from 'styled-components';

const StyledGridTable = styled.div`   
    text-align:center;
    display:grid;
    grid-template-columns: 100px 280px 150px 120px 100px ;
    
    :nth-of-type(odd){
        background-color:rgba(0, 177, 59, 0.735);
    }
`
const BodyDiv = styled.div`
    color:#0247d9;
    font-weight:bolder;
    padding:10px;
    
`
const TeamNameHref = styled.a`
    color:#0247d9;
`
const NationalLeague = ({...props}) => (
    <StyledGridTable>
                    <BodyDiv>
                        {props.a.position}.
                    </BodyDiv>
                    <BodyDiv>
                        <TeamNameHref href={`/team/` + props.a.team.id}>{props.a.team.name}</TeamNameHref>
                    </BodyDiv>
                    <BodyDiv>
                        {props.a.playedGames}
                    </BodyDiv>
                    <BodyDiv>
                        {props.a.goalsFor}:{props.a.goalsAgainst}({props.a.goalDifference})
                    </BodyDiv>
                    <BodyDiv>
                        {props.a.points}
                    </BodyDiv>
                </StyledGridTable>
);

export default NationalLeague;