import React, {useState,useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import ScorersTable from './ScorersTable';

const BestScorers = () =>{

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
            'X-Auth-Token': process.env.REACT_APP_API_KEY,
            
        }});
        console.log(result);
        setPlayers(result.data);
        setIsPlayersLoading(false);
      }catch (error){
          console.log(error)
      }
     
    }
    fetchPlayers('http://api.football-data.org/v2/competitions/'+ id+'/scorers')
  },[id])
  
  return(
    <ScorersTable players={players} isPlayersLoading={isPlayersLoading} />
  )
}

export default BestScorers;