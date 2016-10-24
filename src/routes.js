import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './components/Application'
import Home from './components/Home'
import CharactersListContainer from './containers/CharactersListContainer'


export default (
    <Route path='/' component={Application}>
        <IndexRoute component={Home} ></IndexRoute>
        <Route path="characters" component={CharactersListContainer} />
    </Route>
)