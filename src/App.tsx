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
import Players from './Components/Players/Players'
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
        <Route exact path='/players/:id'>
          <Players/>
        </Route>
      </Switch>
      </Router>
    </StyledDiv>
  );
}

export default App;
