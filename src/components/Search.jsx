import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    return (
      <div className="searchContainer">
          <input tabIndex="1" class="search" placeholder="Add attendee" type="text"/>
          <button class="searchButton">Go</button>
      </div>
    );
  }
}
