import React,{FunctionComponent} from 'react';
import AllUpcomingMatches from '../Body/AllUpcomingMatches'
import styled from 'styled-components';
import LoadingIcon from '../LoadingIcon';
const StyledMain = styled.main`
    margin:100px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const LoadingDiv = styled.div`
display:flex;
justify-content:center;
margin-top:15px ;
`
const StyledH1 = styled.h1`
color:#0247d9;
    text-align:center;
`
const LeagueOver = styled.h1`
    color:#0247d9;
    text-align:center;
`
interface MatchesType{
    
        count:number;
        matches:Array<any>;
        competition:Object;
    
}
interface DataType{
    matches:MatchesType;
    isMatchesLoading:boolean;
}

const UpcomingTable:FunctionComponent<{isMatchesLoading: any, matches: Array<any>}> = (props) =>{
    if(!props.isMatchesLoading && props.matches['count']===0){
        return(
            <StyledMain>
                <LeagueOver>This league is over. Or there are currently no matches scheduled.</LeagueOver>
            </StyledMain>
        )
    }
    if(!props.isMatchesLoading && props.matches['count']>0){
    const stage:Array<DataType>= props.matches['matches'][0].stage.replace(/_/g, ' ').toLowerCase();
    return(
        <StyledMain>
            <StyledH1>{props.matches['competition'].name} {stage} stage.</StyledH1>
            <AllUpcomingMatches data={props.matches}/>
        </StyledMain>
        
    )
    } 
    return(
        <LoadingDiv><LoadingIcon/></LoadingDiv>
    )
}
export default UpcomingTable;