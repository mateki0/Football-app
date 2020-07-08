import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import UpcomingMatches from './AllUpcomingMatches';
import axios from 'axios';
import LoadingIcon from '../LoadingIcon';
import moment from 'moment'
import {IDefaultBodyProps} from './types'
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
const DateDiv = styled.div`
display:flex;
justify-content:center;
margin-bottom:50px;
align-items:center;
`
const DateSpan = styled.span`
font-size:20px;
color:#EBFFEB;
    padding:0 10px;
`
const DateInput = styled.input`
outline:none;
background:#003bb8;
color: #fff;
border:none;
border-radius: 30px;
padding:5px 10px;
`
const DefaultBody = () =>{
    
    const [data, setData] = useState<IDefaultBodyProps[]>([]);
    const [isDataLoading, setIsDataLoading] = useState(true);
    const fromDate = useRef<HTMLInputElement>(null);
    const toDate = useRef<HTMLInputElement>(null);
    const [today, setToday] = useState<string>('');
    const [tomorrow, setTomorrow] = useState<string>('');
    
    
  useEffect(()=>{
    const fetchMatches = async(url:string) =>{
      const proxy = 'https://serene-temple-39805.herokuapp.com/'
      try{
          console.log(url)
        const result = await axios({method:'GET',
        url: proxy+url,
        headers:{
            'X-Auth-Token':process.env.REACT_APP_API_KEY,
            
        }});
            setData(result.data);
            console.log(result.data)
           setIsDataLoading(false);
      }catch (error){
          console.log(error)
      }
     
    }
    fetchMatches(`http://api.football-data.org/v2/matches?dateFrom=${today}&dateTo=${tomorrow}`);
    
  },[today,tomorrow])

    useEffect(()=>{
        let now = moment();
        setToday(now.format().slice(0, 10))
        setTomorrow(now.add(1, 'days').format().slice(0, 10))
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
                <DateDiv>
                    <DateSpan>Show matches from: </DateSpan>
                    <DateInput onChange={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>{setToday(e.currentTarget.value)}} type="date" defaultValue={today} ref={fromDate}/> 
                    <DateSpan>to</DateSpan>
                    <DateInput onChange={(e: { currentTarget: { value: React.SetStateAction<string>; }; })=>{setTomorrow(e.currentTarget.value)}} type="date" defaultValue={tomorrow} ref={toDate}/>
                </DateDiv>
                {(!isDataLoading) ?
                <UpcomingMatches data={data} isDataLoading={isDataLoading} />
                : <LoadingDiv><LoadingIcon/></LoadingDiv>
            }
            
                
            </TodayBest>
        </StyledMain>
    )
}
export default DefaultBody;