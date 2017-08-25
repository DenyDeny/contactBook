import React, { Component } from 'react';

class UserData extends React.Component {
  render() {
    return (
      <tr className="row">
        <td className="col s4">{this.props.person.fullname}</td>
        <td className="col s4">{this.props.person.phone}</td>
        <td className="col s4">{this.props.person.email}</td>
      </tr>
    );
  }
};
export default UserData;