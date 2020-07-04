import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';
import Navbar from './Components/Navbar/Navbar'
import Body from './Components/Body/Body';
import LeaguePage from './Components/LeaguePage/LeaguePage';
import BestScorers from './Components/Players/BestScorers';
import LeagueUpcomingMatches from './Components/LeagueUpcomingMatches/LeagueUpcomingMatches'
import Team from './Components/Team/Team';
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
        <Route exact path='/bestscorers/:id'>
          <BestScorers/>
        </Route>
        <Route exact path='/upcomingmatches/:id'>
          <LeagueUpcomingMatches/>
        </Route>
        <Route exact path='/team/:id'>
          <Team/>
        </Route>
      </Switch>
      </Router>
    </StyledDiv>
  );
}

export default App;
