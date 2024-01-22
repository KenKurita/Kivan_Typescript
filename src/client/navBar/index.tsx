import React from 'react';
import {Outlet, Link} from "react-router-dom";

export const NavBar = () => {

  return (
  <div>
    <ul id="nav-ul">
    <li id="nav-li"><Link to="/SearchProduct">Search Product</Link></li>
    <li id="nav-li"><Link to="/createProduct">Create Product</Link></li>
    </ul>
    <Outlet/>
  </div>
  )
}

const el = <NavBar/>
