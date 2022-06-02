import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <NavLink exact to="/">
            <h1>Timber <span>AB</span></h1>
              </NavLink> 
            <div className="links">
            <NavLink exact to="/">Hem</NavLink>
					<NavLink to="./about">Om Oss</NavLink>
            </div>
        </nav>
    </header>
  );
};

export default Header;