import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                Shows
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                Teams
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/students">
                Students
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/funcall">
                funcall
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/table">
                table
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/table2">
                table 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/useStateDemo1">
                useStateDemo1
              </Link>
            </li> */}
            {/* <li class="nav-item">
              <Link class="nav-link" to="/useStateDemo2">
                useStateDemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/useStateDemo3">
                useStateDemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo1">
                inputdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo2">
                inputdemo2
              </Link>
            </li>
            
            <li class="nav-item">
              <Link class="nav-link" to="/inputdemo3">
                inputdemo3
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            
            
            
            
            
            
            
          </ul>
        </div>
      </nav>
    </div>
  );
};
