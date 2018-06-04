import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  handleChange(e){
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div className="searchContainer">
          <input value={this.state.name} tabIndex="1" class="search" placeholder="Add attendee" type="text" onChange={(e) => this.handleChange(e)}/>
          <button class="searchButton" onClick={() => this.props.addAttendee(this.state.name)}>Go</button>
      </div>
    );
  }
}
