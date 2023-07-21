import Header from './Header.js'
import Profile from './Profile.js'
import Navbar from './Navbar.js'
import Blog from './Blog.js'
import Footer from './Footer.js'
import Portfolio from './Portfolio.js'
// 
import "./index.css";

function App() {
	/* 
	TODO: 
	- scrollbar color
	*/
  return (
	  <>
	  <Header /> 
	  <Profile /> 
	  <Blog />
	  <Portfolio /> 
	  <Footer />
	  </>
  )
}

export default App;
