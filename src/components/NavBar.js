import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Darkmode from './Darkmode';

export class NavBar extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">


          <div className="container-fluid">
            <Link className="navbar-brand" to="/">News Honey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end  ">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/crypto">Crypto</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/trading">Trading</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/esports">e-Sports</Link>
                </li>
              </ul>
            </div>
            {/* <Darkmode/> */}
          </div>
        </nav>
      </div>
      
    )
  }
}

export default NavBar
