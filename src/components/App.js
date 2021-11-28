import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './Robots';
import './App.css';

 class App extends Component {

    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value} );
    }

    render (){

    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return(
        <div className='tc'>

        <h1> RoboFriends </h1>
        <div className='search'>
            <SearchBox searchChange = {this.onSearchChange} />
        </div>
        <div>
            <CardList robots = { filteredRobots } />
        </div>

        </div>
        
    );
  }
}

export default App;