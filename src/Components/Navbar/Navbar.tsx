import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import {Link} from "react-router-dom";
  const StyledA = styled.a`
    font-size:30px;
    color:black;
    text-decoration:none;
    padding:30px;
    &:hover{
        text-decoration:underline;
    }
  `
  const StyledNav = styled.nav`
    text-align:center;
    background: #64B09E;
    height:100%;
    width:250px;
    position:fixed;
    z-index:1;
    top:0;
    left:0;
    overflow-x:hidden;
  `
  const StyledLink = styled(Link)`
    font-size:1.1em;
    font-weight:bold;
    color:#fff;
    &:hover{
        cursor:pointer;
        text-decoration:underline;
    }
  `
  const StyledLi = styled.li`
      margin-bottom:5px;
  `
  const StyledUl = styled.ul`
      padding:0;
      list-style-type:none;
  `
  const TitleDiv = styled.div`
    padding: 20px 0 40px 0;
  `
  
const Navbar = () =>{
  
    return(
        <div>
            <StyledNav>
                <TitleDiv>
                    <StyledA href="/">Football App</StyledA>
                </TitleDiv>
                <StyledUl>
                    
                    <StyledLi><StyledLink to='/league/2021'>Premier League</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2014'>Primera Division</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2002'>Bundesliga</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2015'>League 1</StyledLink></StyledLi>
                    <StyledLi><StyledLink to='/league/2019'>Serie A</StyledLink></StyledLi>
                </StyledUl>
            </StyledNav>
            <SearchBar/>
        </div>
    )
}
export default Navbar;