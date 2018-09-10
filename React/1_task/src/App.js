import React, { Component } from 'react';
import Profile from './Profile';
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
  }
}

const data = Adapter(Data);

console.log('data ', data);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Profile {...data} />
      </div>
    );
  }
}

export default App;
