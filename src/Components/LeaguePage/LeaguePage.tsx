import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router' 
import styled from 'styled-components';
import axios from 'axios';
import LeagueFilterBody from './LeagueFilterBody';
import LeagueTable from './LeagueTable';

const StyledMain = styled.main`
    margin:100px 0 0 250px;
`

const LeaguePage = () =>{
    let {id} = useParams();
    const [league, setLeague] = useState<Array<object>>([]);
    const [leagueTable, setLeagueTable] = useState<Array<object>>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isTableLoading, setIsTableLoading] = useState(true)
    useEffect(() =>{
        
    
        const fetchLeague = async(url: string)=> {
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
                const result = await axios({method:'GET',
                url: proxy+url,
                headers:{
                    'X-Auth-Token':'eea93b6682e94ab9b2bff2c734e753de',
                    
                }});
                
                setLeague(result.data)
                setIsLoading(false)
                
            }catch (error){
                console.log(error)
            }
            }
        fetchLeague('http://api.football-data.org/v2/competitions/'+ id);
        
    
        
    }, [id])
    
    useEffect(() =>{
    
        const fetchStandings = async(url: string)=> {
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
            const result = await axios({method:'GET',
            url: proxy+url,
            headers:{
                'X-Auth-Token':'eea93b6682e94ab9b2bff2c734e753de',
                
            }});
            setLeagueTable(result.data)
            setIsTableLoading(false)
        }catch (error){
            console.log(error)
        }
        }
        fetchStandings('http://api.football-data.org/v2/competitions/'+ id +'/standings');
        
    
       
    }, [id])
    
    return(
        <StyledMain>
            <LeagueFilterBody league={league} isLoading={isLoading}/>
            <LeagueTable standings={leagueTable} isTableLoading={isTableLoading}/>
        </StyledMain>
    )
}

export default LeaguePage;