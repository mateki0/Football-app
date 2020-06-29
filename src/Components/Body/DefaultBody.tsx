import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import UpcomingMatches from './UpcomingMatches';
import axios from 'axios';
const StyledMain = styled.main`
    height:100%;
    margin-left:250px;
    display:flex;
    justify-content:center;
    color:#fff;
`

const StyledH2 = styled.h2`
    text-align:center;
`
const TodayBest = styled.div`
    margin-top:50px;
`

const DefaultBody = () =>{
    
    const [data, setData] = useState<Array<object>>([]);

  useEffect(()=>{
    const fetchMatches = async() =>{
      const proxy = 'https://serene-temple-39805.herokuapp.com/'
      try{
        const result = await axios({method:'GET',
        url: proxy+'http://api.football-data.org/v2/matches',
        headers:{
            'X-Auth-Token':'eea93b6682e94ab9b2bff2c734e753de',
            
        }});
        console.log(result)
        setData(result.data)
      }catch (error){
          console.log(error)
      }
     
    }
    fetchMatches()
  },[])
    return(
        <StyledMain>
            
            <TodayBest>
                <StyledH2>Today's Best Matches:</StyledH2>
                {(data.length !== 0) ?
                <UpcomingMatches data={data} />
                : <div style={{'textAlign':'center'}}>No matches in top leagues today</div>
            }
            </TodayBest>
        </StyledMain>
    )
}
export default DefaultBody;

/// ZROBIC STRONY POSZCZEGOLNYCH LIG