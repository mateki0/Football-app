import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import UpcomingMatches from './UpcomingMatches';
import axios from 'axios';
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

const DefaultBody = () =>{
    
    const [data, setData] = useState<Array<object>>([]);

//   useEffect(()=>{
//     const fetchMatches = async() =>{
//       const proxy = 'https://serene-temple-39805.herokuapp.com/'
//       try{
//         const result = await axios({method:'GET',
//         url: proxy+'http://api.football-data.org/v2/matches',
//         headers:{
//             'X-Auth-Token':'eea93b6682e94ab9b2bff2c734e753de',
            
//         }});
//         console.log(result)
//         setData(result.data)
//       }catch (error){
//           console.log(error)
//       }
     
//     }
//     fetchMatches()
//   },[])
    return(
        <StyledMain>
            
            <TodayBest>
                <StyledH1>Today's Best Matches:</StyledH1>
                {(data.length !== 0) ?
                <UpcomingMatches data={data} />
                : <div style={{'textAlign':'center'}}>No matches in top leagues today</div>
            }
            </TodayBest>
        </StyledMain>
    )
}
export default DefaultBody;