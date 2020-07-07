import React,{FunctionComponent} from 'react';
import styled from 'styled-components';

const StyledGridTable = styled.div`   
    text-align:center;
    display:grid;
    grid-template-columns: 300px 150px 150px 150px ;
    
    :nth-of-type(odd){
        background-color:rgba(0, 177, 59, 0.735);
    }
`
const BodyDiv = styled.div`
    color:#0247d9;
    font-weight:bolder;
    padding:10px;
    
    
`
const HeaderDiv = styled.div`
    color:#0247d9;
    background-color:rgba(0, 177, 59, 0.735);
    padding:10px 0;
    font-weight:bold;
    font-size:20px;
    `
const TeamNameHref = styled.a`
    color:#0247d9;
`
const SearchedCompetitionsTable:FunctionComponent<{searchedCompetitions:Array<any>}> = (props) => {
    console.log(props.searchedCompetitions)
    if (props.searchedCompetitions.length === 0){
        return(
            <BodyDiv>No matching results</BodyDiv>
        )
    }
    return(
        <div>
            <StyledGridTable >
                    <HeaderDiv>
                        League Name
                    </HeaderDiv>
                    <HeaderDiv>
                        Start Date
                    </HeaderDiv>
                    <HeaderDiv>
                        End Date
                    </HeaderDiv>
                    <HeaderDiv>
                        Country
                    </HeaderDiv>
                </StyledGridTable>
        {props.searchedCompetitions.map((a,b)=>(
    <StyledGridTable key={b}>
                    <BodyDiv>
                    {a.plan==="TIER_ONE" ? 
                        <TeamNameHref href={`/league/${a.id}`}>{a['name']}</TeamNameHref> :
                        a['name']}
                    </BodyDiv>
                    <BodyDiv>
                        {a['currentSeason']['startDate']}
                    </BodyDiv>
                    <BodyDiv>
                        {a['currentSeason']['endDate']}
                    </BodyDiv>
                    <BodyDiv>
                        {a.area['name']}
                    </BodyDiv>
                    
                </StyledGridTable>
    ))}
</div>
);
    }
export default SearchedCompetitionsTable;