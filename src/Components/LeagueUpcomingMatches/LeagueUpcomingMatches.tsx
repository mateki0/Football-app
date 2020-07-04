import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router';
import UpcomingTable from './UpcomingTable'
import axios from 'axios';
import moment from 'moment';

const LeagueUpcomingMatches = () =>{
    let now = moment()
    let from = now.format().slice(0, 10)
    let twoWeeks = now.add(14, 'days')
    let to = twoWeeks.format().slice(0, 10);
    
    const [matches, setMatches] = useState<Array<object>>([]);
    const [isMatchesLoading, setIsMatchesLoading] = useState(true); 
    let {id} = useParams();
      useEffect(()=>{
    const fetchMatches = async(url: string) =>{
      
      const proxy = 'https://serene-temple-39805.herokuapp.com/'
      try{
        const result = await axios({method:'GET',
        url: proxy+url,
        headers:{
            'X-Auth-Token': process.env.REACT_APP_API_KEY,
        }});
        setMatches(result.data);
        setIsMatchesLoading(false);
      }catch (error){
          console.log(error)
      }
    }
    if(id === 'CL'){
      fetchMatches(`http://api.football-data.org/v2/competitions/${id}/matches?status=SCHEDULED`)
    } else{
      fetchMatches(`http://api.football-data.org/v2/competitions/${id}/matches?status=SCHEDULED&dateFrom=${from}&dateTo=${to}`)
    }
},[id, from, to])
    return(
        <UpcomingTable matches={matches} isMatchesLoading={isMatchesLoading}/>
    )
}

export default LeagueUpcomingMatches