
import React, { Component } from "react";
export default class CreateExercises extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount(){

    this.setState({

    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(exercise);
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input type="text" value={this.state.username} onChange={this.onChangeUsername}/>
          </div>
          <div className="form-group">
          <label>Password</label>
            <input type="text" onChange={this.onChangePassword}/>
          </div>
          <div className="form-group">
            <input type="submit" value="Create New User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
