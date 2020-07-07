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
import SearchBar from './Components/SearchBar';
import PlayerSearch from './Components/PlayerSearch/PlayerSearch';
import CompetitionsSearch from './Components/CompetitionsSearch/CompetitionsSearch';

const StyledDiv = styled.div`

width:100%;
display:grid;
grid-template-columns: 250px 1fr;
`
const App = () => {
  return (
    <StyledDiv >
      <Router>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <div>
            <SearchBar/>
            <Body/>
          </div>
        </Route>
        <Route exact path='/league/:id'>
          <Navbar />
          <div>
            <SearchBar/>
            <LeaguePage/>
          </div>
        </Route>
        <Route exact path='/bestscorers/:id'>
          <Navbar />
          <div>
            <SearchBar/>
            <BestScorers/>
          </div>
        </Route>
        <Route exact path='/upcomingmatches/:id'>
          <Navbar />
          <div>
            <SearchBar/>
            <LeagueUpcomingMatches/>
          </div>
        </Route>
        <Route exact path='/team/:id'>
          <Navbar />
          <div>
            <SearchBar/>
            <Team/>
          </div>
        </Route>
        <Route exact path='/player/:query'>
          <Navbar/>
          <div>
            <SearchBar/>
            <PlayerSearch/>
          </div>
        </Route>
        <Route exact path='/competitions/:query'>
          <Navbar/>
          <div>
            <SearchBar/>
            <CompetitionsSearch/>
          </div>
        </Route>
      </Switch>
      </Router>
    </StyledDiv>
  );
}

export default App;
