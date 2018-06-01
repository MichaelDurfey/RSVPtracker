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
          <input class="search" placeholder="Search Names" type="text"/>
          <button class="searchButton">Search</button>
      </div>
    );
  }
}
