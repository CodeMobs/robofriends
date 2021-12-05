import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import "./App.css";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [finalUsers, setFinalUsers] = useState([]);
  const finalUserdata = [];

  // Here we re fetching the first 10 initial users from the first endpoint
  const fetchIntialUsers = async () => {
    await axios
      .get(
        "https://api.github.com/search/users?q=language:javascript+type:user&sort=followers&order=desc&page=1&per_page=10"
      )
      .then((response) => {
        setUsers(response.data.items);
      });
  };

  // This is the function for fetching data for a specific userbased on a url from the second endpoint
  const fetchDataPerUser = async (url) => {
    // I construct an array  with all the data i get for every user
    await axios.get(url).then((response) => finalUserdata.push(response.data));
  };

  useEffect(() => {
    fetchIntialUsers();
    users.forEach((user) => fetchDataPerUser(user.url));
    // this is a small hack to  make sure that react will update the state before rendering the data
    setFinalUsers(finalUserdata);
  }, []);

  return (
    <div>
      <CardList robots={finalUsers} />
    </div>
  );
};
export default App;
