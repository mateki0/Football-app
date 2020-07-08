import React,{useEffect, useState } from 'react';
import {useParams} from 'react-router'
import styled from 'styled-components';
import axios from 'axios'
import SingleMatchHeader from './SingleMatchHeader';
import SingleMatchScore from './SingleMatchScore';
import HeadToHead from './HeadToHead'
import LoadingIcon from '../LoadingIcon';
import {IMatchesType} from './types';
const StyledMain = styled.main`
    margin:100px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const SingleMatch = () =>{
    let {id} = useParams();
    const [matches, setMatches] = useState<IMatchesType[]>([]);
    const [isMatchesLoading, setIsMatchesLoading] = useState(true);
    useEffect(()=>{
        const fetchMatches = async(url: string) =>{
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
                const result = await axios({
                    method:'GET',
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
            fetchMatches('http://api.football-data.org/v2/matches/'+ id)
        },[id])
        if(isMatchesLoading){
            return <StyledMain><LoadingIcon/></StyledMain>
        }
    return(
        <StyledMain>
            <SingleMatchHeader {...matches}/>
            <SingleMatchScore {...matches}/>
            <HeadToHead {...matches}/>
        </StyledMain>
    )
}
export default SingleMatch;