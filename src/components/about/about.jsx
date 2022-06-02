import React, { Component } from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import Contact from './contact'
import './about.css'


const About = () => {
  return (
	<div className="about">
	<h1>Om Timber AB</h1>
	<div className="paragraph">
	<p> Timber är till för att matcha rätt personal till rätt tjänster utan dröjsmål. vår vision är att koppla samman arbetstagare med arbetssökande på ett smidigt och enkelt sätt. Vi ser till att processen mellan den första kontakten och kontraktsskrivning blir så kort och lätt som möjligt, så att ni som arbetstagare och arbetsgivare kan fokusera på det som är viktigt för er.  </p>
	</div>
			<p>Vid eventuella frågor och funderingar följ länken nedanför </p>
	
		<Link className='link' to="/about/contact">Kontakta oss</Link>
		
	<Routes>
		<Route path="/about/contact" element={<Contact/>}/>

	</Routes>
</div>
  );
}

export default About
