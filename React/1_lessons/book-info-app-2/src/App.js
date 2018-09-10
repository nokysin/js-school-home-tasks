import React, { Component } from 'react';
import BookCard from './BookCard';


import bookJson from './book.json';
const books = JSON.parse
console.log('bookJson ', bookJson);


class App extends Component {
  render() {
    return (
      <div className="container">
          <BookCard 
          name="Harry Potter"
          thumbnail="https://lh3.googleusercontent.com/Eb8igNFfrgc1Pdayp7bh_h-IKjPQL138YCkknAVxEyYTBThricwo_XG3bFdgoqj_PiTGwFc=w128-h128-e365"
          />
      </div>
    );
  }
}

export default App;
