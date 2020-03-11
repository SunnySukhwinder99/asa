import React, { Component } from "react";
import axios from "axios";

const Users = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
  </tr>
);

export default class LoginUser extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.userList = this.userList.bind(this);

    this.state = {
      users: [],
      username: [],
      password: ""
    };
  }

  userList() {
    return this.state.usercs.localeCompare(currentuser => {
      return <Users user={currentuser} />;
    });
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data.map(user => user.username),
          password: response.data.password
        });
        console.log(response.data);
        console.group(this.state.username);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state.users);
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username:&nbsp; </label>
            <input type="text" placeholder="Your Username" />
          </div>
          <div className="form-group">
            <label>Password:&nbsp; </label>
            <input type="text" placeholder="Your Password" />
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>

        <div>
          {/* <table>{this.userList()}</table> */}
          <p>{this.state.username}</p>
        </div>
      </div>
    );
  }
}
