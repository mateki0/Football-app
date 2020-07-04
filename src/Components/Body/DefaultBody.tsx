import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import UpcomingMatches from './AllUpcomingMatches';
import axios from 'axios';
import LoadingIcon from '../LoadingIcon';
const StyledMain = styled.main`
    height:100%;
    margin:20px auto 0 auto;
    display:flex;
    justify-content:center;
    
`

const StyledH1 = styled.h1`
color:#0247d9;
    text-align:center;
`
const TodayBest = styled.div`
    margin-top:50px;
`
const LoadingDiv = styled.div`
display:flex;
justify-content:center;
margin-top:15px ;
`
const DefaultBody = () =>{
    
    const [data, setData] = useState<Array<object>>([]);
    const [isDataLoading, setIsDataLoading] = useState(true);
  useEffect(()=>{
    const fetchMatches = async() =>{
      const proxy = 'https://serene-temple-39805.herokuapp.com/'
      try{
        const result = await axios({method:'GET',
        url: proxy+'http://api.football-data.org/v2/matches',
        headers:{
            'X-Auth-Token':process.env.REACT_APP_API_KEY,
            
        }});
        
        setData(result.data)
           setIsDataLoading(false)
      }catch (error){
          console.log(error)
      }
     
    }
    fetchMatches()
  },[])
  if(!isDataLoading && data.length === 0){
      return(
        <div style={{'textAlign':'center'}}>No matches in top leagues today</div>
      )
  }
    return(
        <StyledMain>
            
            <TodayBest>
                <StyledH1>Today's Best Matches:</StyledH1>
                
                {(!isDataLoading) ?
                <UpcomingMatches data={data} isDataLoading={isDataLoading} />
                : <LoadingDiv><LoadingIcon/></LoadingDiv>
            }
            </TodayBest>
        </StyledMain>
    )
}
export default DefaultBody;