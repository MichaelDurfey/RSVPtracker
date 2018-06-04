import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import Search from './components/Search';
import Attendees from './components/Attendees';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attendees: [
        {
          name: 'Michael',
          confirmed: true,
          guests: 0,
        }
      ],
      numConfirmed: 1,
    };
  }

  componentDidMount() {
    
  }

  handleSubmit(idx, editVals){
    const { name, confirmed, guests } = editVals;
    let attendees = this.state.attendees.slice();
    attendees[idx] = {
      name,
      confirmed,
      guests
    };
    if (confirmed) {
      this.setState({ attendees, numConfirmed: this.state.numConfirmed += 1 })
    } else {
      this.setState({ attendees, numConfirmed: this.state.numConfirmed -= 1 })
    }
  }

  addAttendee(name) {
    let attendees = this.state.attendees.slice();
    attendees.push({
      name,
      confirmed: true,
      guests: 0
    })
    this.setState({ attendees })
  }

  removeItem(idx){
    let attendees = this.state.attendees.slice();
    attendees.splice(idx, 1);
    this.setState({ attendees });
  }

  render() {
    return (
    <div className="container">
      <div className="imageDiv">
        <NavBar />
        <div className ="titleContainer">
          <h1 className="title">RSVP</h1>
        </div>
      </div>
      <Search addAttendee={(name) => this.addAttendee(name)}/>
      <div className="confirmedGuests">
        <h4>Confirmed: {this.state.numConfirmed}</h4>
        <h4>Total Guests: {this.state.attendees.length}</h4>
      </div>
      <Attendees 
      attendees={this.state.attendees} 
      handleSubmit={(idx, state) => this.handleSubmit(idx, state)} 
      removeItem={(idx) => this.removeItem(idx)}
      />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();