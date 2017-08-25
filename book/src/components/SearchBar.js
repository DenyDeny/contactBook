import React, { Component } from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Найти контакт..."
          onChange={this.props.update}
        />
      </div>
    );
  }
};
export default SearchBar;