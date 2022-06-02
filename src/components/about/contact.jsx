import React from 'react';
import './contact.css'

const Contact = () => {
	return ( 
		<div className="contact">	
		  <h1>Kontakta oss</h1>
		  <p>Vill du komma i kontakt med oss eller har en fråga? Tveka då inte att ringa oss på telefonnummer <b>010-199 923093</b> eller mejla oss på </p>
		  <button className='mail' onClick={() => window.location = 'mailto:timber.ask@gmail.com'}>  <p className='mail' >timber.ask@gmail.com</p></button>
		</div>
	 );
}
 
export default Contact;