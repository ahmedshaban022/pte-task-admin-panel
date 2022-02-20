import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
        <div className="container">
          <a className="navbar-brand text-success fw-bold" href="#">
            PTE-ADMIN
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink to="pte-task-admin-panel/add-new-user" className="nav-link" >
                Add User
                </NavLink>
              </li>
              <li className="nav-item">
              <NavLink to="pte-task-admin-panel/" className="nav-link" >
                Display Users
                </NavLink>
              </li>
            
            </ul>
           
          </div>
        </div>
      </nav>
      
    );
}

export default Navbar;