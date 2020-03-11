import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Housing
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                SignUp
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      //   <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      //     <a className="navbar-brand" href="/">
      //       ExerciseTracker
      //     </a>

      //     <div className="collapse navbar-collapse">
      //       <ul className="navbar-nav mr-auto">
      //         <li className="nav-item">
      //           <a className="nav-link" href="/">
      //             Exercises <span className="sr-only">(current)</span>
      //           </a>
      //         </li>

      //         <li className="nav-item">
      //           <a className="nav-link" href="/create">
      //             Create Exercise Log
      //           </a>
      //         </li>
      //         <li className="nav-item">
      //           <a className="nav-link" href="/user">
      //             Create User
      //           </a>
      //         </li>
      //       </ul>
      //     </div>
      //   </nav>
    );
  }
}
