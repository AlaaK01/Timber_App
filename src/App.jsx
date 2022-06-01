
 import Header from './components/Header/header'
 import Footer from './components/Footer/Footer'

 import SideBar from './components/SideBar/SideBar'
 import './App.css'
import PostList from './components/Content/Post'

function App() {
 

  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <h1>Timberss</h1>
      <PostList />
      <Footer/>
    </div>
  )
}

export default App
