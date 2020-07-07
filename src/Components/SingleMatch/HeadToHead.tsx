import React from 'react';
import styled from 'styled-components';

const Head = styled.div`
    width:546px;
`
const Title = styled.h2`
    color:#0247d9;
    text-align:center;
`
const GamesInfo = styled.div`
    
    margin-top:30px;
    display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap:50px;
`
const OneTeam = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
`
const WinLoseDraw = styled.span`
    color:#0247d9;
    font-size:20px;
    font-weight:600;
    text-align:center;
`
const HeadToHead = ({...matches}) =>{
    return(
        <Head>
            <Title>Head To Head</Title>
            <GamesInfo>
                <OneTeam>
                    <WinLoseDraw>Wins:{matches.head2head.homeTeam.wins}</WinLoseDraw>
                    <WinLoseDraw>Draws:{matches.head2head.homeTeam.draws}</WinLoseDraw>
                    <WinLoseDraw>Losses:{matches.head2head.homeTeam.losses}</WinLoseDraw>
                </OneTeam>
                <OneTeam>
                    <WinLoseDraw>Wins:{matches.head2head.awayTeam.wins}</WinLoseDraw>
                    <WinLoseDraw>Draws:{matches.head2head.awayTeam.draws}</WinLoseDraw>
                    <WinLoseDraw>Losses:{matches.head2head.awayTeam.losses}</WinLoseDraw>
                </OneTeam>
            </GamesInfo>
        </Head>
    )
}
export default HeadToHead;