import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
const StyledMain = styled.main`
    margin:75px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
` 
const PlayerSearch = () => {
    const [searchedPlayer, setSearchedPlayers] = useState<Array<object>>([]);
    const [isPlayerLoading, setIsPlayerLoading] = useState(true);
    const {query} = useParams();
    useEffect(()=>{
        const fetchPlayers = async(url: string) =>{
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
              const result = await axios({method:'GET',
              url: proxy+url,
              headers:{
                  'X-Auth-Token': process.env.REACT_APP_API_KEY,
              }});
              setSearchedPlayers(result.data);
              setIsPlayerLoading(false);
            }catch (error){
                console.log(error)
            }
          }
          fetchPlayers('http://api.football-data.org/v2/players/')
    },[query])
    return(
        <StyledMain>
            <h1>Hello {query}</h1>
        </StyledMain>
    )
}
export default PlayerSearch