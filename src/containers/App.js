import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Button from "../components/Button";
//import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield: "",
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchField] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const onClickEvent = () => {
    setCount(count + 1);
  };

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading ...</h1>
  ) : (
    <div className="tc">
      <h1> RoboFriends </h1>
      <div className="search">
        <SearchBox searchChange={onSearchChange} />
      </div>
      <div>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    </div>
  );
}

export default App;
