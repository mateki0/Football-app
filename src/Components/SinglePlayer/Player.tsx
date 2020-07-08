import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import moment from 'moment';
import styled from 'styled-components';
import {IPlayerProps} from './types';
import LoadingIcon from '../LoadingIcon';

const LoadingDiv = styled.div`
    display:flex;
    justify-content:center;
    margin-top:15px ;
`
const StyledMain = styled.main`
    margin:100px auto 0 auto;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Name = styled.h2`
    color:#0247d9;
    font-weight:900;
`
const PlayerInfo = styled.div`
    display:flex;

`
const Age = styled.h3`
    color:#0247d9;
    font-weight:600;
    padding:0 20px;
`
const Player = () =>{
    let {id} = useParams();
    const [player,setPlayer] = useState<IPlayerProps[]>([]);
    const [isPlayerLoading, setIsPlayerLoading] = useState(true)

    useEffect(()=>{
        const fetchPlayer = async(url:string)=>{
            const proxy = 'https://serene-temple-39805.herokuapp.com/';
            try{
                const result = await axios({
                    method:'GET',
                    url:proxy + url,
                    headers:{
                        'X-Auth-Token': process.env.REACT_APP_API_KEY,
                    }
                });
                setPlayer(result.data);
                setIsPlayerLoading(false)
            }catch (error){
                console.log(error)
            }
        } 
        fetchPlayer(`http://api.football-data.org/v2/players/${id}`)
    },[id])
    if(isPlayerLoading){
        return <LoadingDiv><LoadingIcon/></LoadingDiv>
    }
    return (
        <StyledMain>
            <Name>{player['name']}</Name>
            <PlayerInfo>
                <Age>
                    Age: {moment().diff(player['dateOfBirth'], 'years')}
                </Age>
                <Age>
                    Position: {player['position']}
                </Age>
                <Age>
                    Nationality: {player['nationality']}
                </Age>
            </PlayerInfo>
        </StyledMain>
    )
}

export default Player