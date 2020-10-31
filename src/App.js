import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
// import Tonia from './assests/images/toniasaba.JPG';
// import Footer from './components/footer.js';
// import HomePage from './pages/home.js';
// import ProjectPage from './pages/projects.js';
import Typist from 'react-typist';

class App extends React.Component {


  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Typist className="TypistExample-message"
              cursor={{ hideWhenDone: true }}>
            <Typist.Delay ms={900} />
              <span className="helloworld">print("Hello World")</span>
              </Typist>
              
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  
                  <Link className="nav-link" to="/projects">Projects</Link>
                  <a className="nav-link" href="https://docs.google.com/document/d/1yrCAZunRJWwRmdi-le2rSYupCvo4D5cnQbg2cJnQyFQ/export?format=pdf"> Download Resume</a>
                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          
        </Container>
      </Router>
    )
  }
}


export default App;
