import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const StyledA = styled.a`
font-size:30px;
color:#EBFFEB;
text-decoration:none;
margin:30px 0;
transition:all .5s;
font-weight:600;
&:hover{
    text-decoration:underline;
    color:rgba(104,220,70,1);
}
`
const StyledNav = styled.nav`
text-align:center;
height:100%;
width:250px;
position:fixed;
z-index:1;
top:0;
left:0;
overflow-x:hidden;
border-right:1px dotted #EBFFEB;
`
const StyledLink = styled(Link)`
font-size:1.1em;

color:#EBFFEB;
text-decoration:none;
transition:all .5s;
&:hover{
    text-decoration:underline;
    color:rgba(104,220,70,1);
}
`
const StyledLi = styled.li`
  margin-bottom:5px;
`
const StyledUl = styled.ul`
  
  padding:0;
  list-style-type:none;
`
const LeaguesUl = styled(StyledUl)`
margin:10px 0 0 0;
`
const ChampionsUl = styled(StyledUl)`
margin-top:50px;
`
const TitleDiv = styled.div`
padding: 20px 0 40px 0;
`
const StyledLiTitle = styled.h2`
font-weight:600;
color:#EBFFEB;
`
const NavLinks = () =>{
    return(
        <StyledNav>
                <TitleDiv>
                    <StyledA href="/">Football App</StyledA>
                </TitleDiv>
                <LeaguesUl>
                    <StyledLi><StyledLink to='/league/2021'>Premier League</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2014'>Primera Division</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2002'>Bundesliga</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2015'>League 1</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2019'>Serie A</StyledLink></StyledLi>
                </LeaguesUl>
                <ChampionsUl>
                    <StyledLi><StyledLink to='/league/CL'>Champions League</StyledLink></StyledLi>
                </ChampionsUl>
                <ChampionsUl>
                  <StyledLi><StyledLiTitle>Best Scorers</StyledLiTitle></StyledLi>
                  <StyledLi><StyledLink to='/bestscorers/2021'>Premier League</StyledLink></StyledLi>
                  <StyledLi><StyledLink to='/bestscorers/2014'>Primera Division</StyledLink></StyledLi>
                  <StyledLi><StyledLink to='/bestscorers/2002'>Bundesliga</StyledLink></StyledLi>
                  <StyledLi><StyledLink to='/bestscorers/2015'>League 1</StyledLink></StyledLi>
                  <StyledLi><StyledLink to='/bestscorers/2019'>Serie A</StyledLink></StyledLi>
                  <StyledLi><StyledLink to='/bestscorers/CL'>Champions League</StyledLink></StyledLi>
                </ChampionsUl>
            </StyledNav>
    )
}

export default NavLinks