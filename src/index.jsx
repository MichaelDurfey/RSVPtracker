import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import Search from './components/Search';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="container">
          <div class="imageDiv">
          <NavBar />
          <h1 className="title">RSVP</h1>
          </div>
          <Search />
          <div class ="attendees">
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();