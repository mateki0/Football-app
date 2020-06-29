import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body';
import LeaguePage from './Components/LeaguePage/LeaguePage';
const StyledDiv = styled.div`

width:100%;
`
const App = () => {
  
  
  
  return (
    <StyledDiv >
      <Router>
        <Navbar />
      <Switch>
        <Route exact path="/">
          <Body/>
        </Route>
        <Route exact path='/league/:id'>
          <LeaguePage/>
        </Route>
      </Switch>
      </Router>
    </StyledDiv>
  );
}

export default App;
