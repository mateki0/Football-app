import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import ScorersTable from './ScorersTable';

const Players = () =>{

    let {id} = useParams();
    const [players, setPlayers] = useState<Array<object>>([]);
    const [isPlayersLoading, setIsPlayersLoading] = useState(true); 
      useEffect(()=>{
    const fetchPlayers = async(url: string) =>{
      const proxy = 'https://serene-temple-39805.herokuapp.com/'
      try{
        const result = await axios({method:'GET',
        url: proxy+url,
        headers:{
            'X-Auth-Token':'eea93b6682e94ab9b2bff2c734e753de',
            
        }});
        console.log(result)
        setPlayers(result.data)
        setIsPlayersLoading(false)
      }catch (error){
          console.log(error)
      }
     
    }
    fetchPlayers('http://api.football-data.org/v2/competitions/'+ id+'/scorers')
  },[id])
  console.log(players)
  return(
    <ScorersTable players={players} isPlayersLoading={isPlayersLoading} />
  )
}

export default Players;