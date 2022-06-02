import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header>
        <nav className="navbar">
            <h1>Timber <span>Bolag</span></h1>
            <div className="links">
            <NavLink exact to="/">Hem</NavLink>
					<NavLink to="./myTeam">Min Intresent</NavLink>
					<NavLink to="./videos">Videos</NavLink>
					<NavLink to="./about">Om Oss</NavLink>
            </div>
        </nav>
    </header>
  );
};

export default Header;