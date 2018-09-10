import React, { Component } from 'react';
import MainImage from './MainImage';
import MainInfo from './MainInfo';
import Statistics from './Statistics';
import Data from './data/user';


const Adapter = (data) => {
  return {
    thumbnail: data.avatar_url,
    username: data.login,
    company: data.company,
    location: data.location,
    name: data.name,
    repositories: data.public_repos,
    following: data.following,
    followers: data.followers
    // username: data.login,
    // username: data.login,
    // username: data.login,
  }
}

const data = Adapter(Data);

console.log(data);

class App extends Component {
  render() {
    return (
      <div className="container">
          <MainImage 
            thumbnail    = {data.thumbnail}
            thumbnailAlt = {data.username}
          />
          <MainInfo
            name     = {data.name}
            username = {data.username}
            company  = {data.company}
            location = {data.location}
          />
          <Statistics
            repositories = {data.repositories}
            following = {data.following}
            followers = {data.followers}
          />
      </div>
    );
  }
}

export default App;
