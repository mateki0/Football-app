import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import styled from 'styled-components';
import SearchedCompetitionsTable from './SearchedCompetitionsTable'
import LoadingIcon from '../LoadingIcon';
import {ICompTypes} from './types'
const StyledMain = styled.main`
    margin:120px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
` 
const CompetitionsSearch = () => {
    const [searchedCompetitions, setSearchedCompetitions] = useState<ICompTypes[]>([]);
    const [isCompetitionsLoading, setIsCompetitionsLoading] = useState(true);
    const {query} = useParams();
    useEffect(()=>{
        const fetchCompetitions = async(url: string) =>{
            const proxy = 'https://serene-temple-39805.herokuapp.com/'
            try{
              const result = await axios({method:'GET',
              url: proxy+url,
              headers:{
                  'X-Auth-Token': process.env.REACT_APP_API_KEY,
              }});
              const filtered = result.data.competitions.filter(a=> a.name.toLowerCase().includes(query));
              console.log(filtered)
              setSearchedCompetitions(filtered);
              setIsCompetitionsLoading(false);
            }catch (error){
                console.log(error)
            }
          }
          fetchCompetitions('http://api.football-data.org/v2/competitions/')
    },[query])
    return(
        <StyledMain>
            {!isCompetitionsLoading ? (
            <SearchedCompetitionsTable searchedCompetitions={searchedCompetitions} />)
            : <LoadingIcon/>}
        </StyledMain>
    )
}
export default CompetitionsSearch