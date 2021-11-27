import React from 'react';
import Cardlist from './components/Cardlist';
import { robots } from './components/Robots';

const App = () => {

    return(
        <Cardlist robots = { robots } />
    );
}

export default App;