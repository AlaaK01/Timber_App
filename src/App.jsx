
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header/header'
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import Video from './components/video/video'
import About from './components/about/about'
import Contact from './components/about/contact'
import Cards from './components/Card/Cards'
import React, { useState, useEffect } from "react";
import './App.css'
import Content from './components/Content/Content'



function App() {

  const [members, setMembers] = useState([
		{name:'pikachu', url: 'https://pokeapi.co/api/v2/pokemon-species/25/'}		
	]) 
  const [pokemon, setPokemon] = useState([]);
  

  useEffect(() => {
		const fetchData = async () => { const response = await fetch(
				"https://pokeapi.co/api/v2/pokemon-species/?limit=20000"
		 	);
			const data = await response.json();
		 	setPokemon(data.results);
		};

		fetchData();
	}, []);

  const handleAdd = (e, name) =>{
    const newMember = pokemon.find(poke => poke.name === name);	
   setMembers([...members, { name: newMember.name, url: newMember.url}]);
  console.log(newMember.name)
}

// const handleDelete =(e, name)=>{
//   const pokeDeleted = members.filter(poke => poke.name !== name)
//   setMembers(pokeDeleted)
 
// }

  return (
   <Router>
      <div>
        <Header/> 
        
         <main className="container"> 
				<Routes>
					<Route path="/" element={
            <div>
            <SideBar/>
            <Content pokemons={pokemon}  handleAdd={handleAdd}/>
            
            </div>
          } />
					
          <Route path='/cards' element={<Cards members={members} setMembers={setMembers} />} />
					<Route path="/videos" element={<Video/>} />					
					<Route path="/about" element={<About/>}/>
          <Route path="/about/contact" element={<Contact/>}/>
				</Routes>
			</main>      
        <Footer/>
      </div>
    
   </Router>
  )
}

export default App

