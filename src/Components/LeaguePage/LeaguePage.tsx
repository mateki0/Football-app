import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router' 
import styled from 'styled-components';
import axios from 'axios';
import LeagueHeader from './LeagueHeader';
import LeagueTable from './LeagueTable';
import {ILeagueProps} from './types';
import LoadingIcon from '../LoadingIcon';
const StyledMain = styled.main`
    margin:75px auto 0 auto;
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
const LeaguePage = () =>{
    let {id} = useParams();
    const [league, setLeague] = useState<ILeagueProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        
    
        const fetchLeague = async(url: string)=> {
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
                const result = await axios({method:'GET',
                url: proxy+url,
                headers:{
                    'X-Auth-Token':process.env.REACT_APP_API_KEY,
                    
                }});
                
                setLeague(result.data)
                setIsLoading(false)
                
            }catch (error){
                console.log(error)
            }
            }
        fetchLeague('http://api.football-data.org/v2/competitions/'+ id);
        
    
        
    }, [id])
    
    
    if(isLoading){
        return(
            <LoadingDiv><LoadingIcon/></LoadingDiv>
        )
    }
    return(
        <StyledMain>
            <LeagueHeader league={league} isLoading={isLoading}/>
            <LeagueTable id={id} />
        </StyledMain>
    )
}

export default LeaguePage;