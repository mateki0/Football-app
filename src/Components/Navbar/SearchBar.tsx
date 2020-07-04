import React from 'react'
import styled from 'styled-components';
const StyledDiv = styled.div`
    display:flex;
    justify-content:center;
    margin:0 320px;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:300px;
    height:100px;
`
const StyledSearch = styled.div`
    margin: auto;
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:80px;
    height:80px;
    background:#003bb8;
    border-radius:50%;
    z-index:4;
    box-shadow: 0 0 25px 0 #003bb8;
    transition: all 1s;
    &:hover{
        cursor:pointer
    }

    &::before {
        content:"";
        position:absolute;
        margin: auto;
        top:22px;
        right:0;
        bottom:0;
        left:22px;
        width:12px;
        height:2px;
        background:#fff;
        transform:rotate(45deg);
        transition: all .5s;
    }
    &::after{
        content:"";
        position:absolute;
        margin:auto;
        top:-5px;
        right:0;
        bottom:0;
        left:-5px;
        width:25px;
        height:25px;
        border-radius:50%;
        border:2px solid #fff;
        transition: all .5s;
    }
`

const StyledInput = styled.input`
    position:absolute;
    width:50px;
    height:50px;
    text-align:center;
    margin:auto;
    top:0;
    left:0;
    bottom:0;
    right:0;
    outline:none;
    background:#003bb8;
    color: white;
    border:none;
    text-shadow: 0 0 10px #003bb8;
    box-shadow: 0 0 25px 0 #003bb8,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 0 20px 0 80px;
    border-radius: 30px;
    z-index:5;
    opacity:0;
    transition:all 1s;
    letter-spacing:0.1em;
    font-weight:600;

    &:hover{
        cursor:pointer;
    }
    &:focus{
        width:350px;
        opacity:1;
        cursor:text;
    }

    
    &:focus ~${StyledSearch}{
        left:-300px;
        z-index:6;
        background:#151515;
    
        &::before{
            top:0;
            left:0;
            width:25px;
        }
        &::after{
            top:0;
            left:0;
            width:25px;
            height:2px;
            border:none;
            background:white;
            border-radius:0%;
            transform:rotate(-45deg);
        }
    }
    &::placeholder{
            color:white;
            opacity:0.5;
            font-weight:600;
            
        }

`
const NavSearch = styled.div`
        
        
`
const SearchBar =() => {
    return(
        <NavSearch>
            <StyledDiv >
                <StyledInput placeholder="Search by competitions, clubs or players"/>
                <StyledSearch></StyledSearch>
             </StyledDiv>
        </NavSearch>
    )
}
export default SearchBar;