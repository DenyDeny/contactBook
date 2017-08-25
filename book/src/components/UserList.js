import React, { Component } from 'react';
import UserData from './UserData';
import ToolBar from './ToolBar';

class UserList extends React.Component {
  
  render() {
    let filteredPeople = this.props.people.filter(
      (person) => {
        var fullinfo = person.fullname.toLowerCase() + person.phone + person.email
        return fullinfo.indexOf(
          this.props.search.toLowerCase()) !== -1;
      }
    );

    return (
      <table className="user-list table table-striped striped">
        <thead>
          <tr>
          <ToolBar 
            data={this.props.data}
            update={this.props.update}
          />
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map((person, index)=> {
              return <UserData key={index} person={person} />
          })}
        </tbody>
      </table>
    );
  }
};

export default UserList;