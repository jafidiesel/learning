import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import PhotoGrid from '../PhotoGrid/PhotoGrid';
import Single from '../Single/Single';

function App() {
  return (
    <div>
      <h1>
        <Link to='/'>Reduxstagram</Link>
      </h1>
      <Switch>
        <Route path='/view/:postId' component={Single} />
        <Route exact path='/' component={PhotoGrid} />
      </Switch>
    </div>
  );
}

export default App;
