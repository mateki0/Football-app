import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router' 
import styled from 'styled-components';
import axios from 'axios';
import LeagueFilterBody from './LeagueFilterBody';
import LeagueTable from './LeagueTable';
import SearchBar from '../SearchBar';
const StyledMain = styled.main`
    margin:75px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const LeaguePage = () =>{
    let {id} = useParams();
    const [league, setLeague] = useState<Array<object>>([]);
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
    
    
    
    return(
        <StyledMain>
            
            <LeagueFilterBody league={league} isLoading={isLoading}/>
            <LeagueTable id={id} />
        </StyledMain>
    )
}

export default LeaguePage;