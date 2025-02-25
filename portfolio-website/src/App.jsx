import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from 'react-bootstrap/Button';
import { Navbar } from 'react-bootstrap';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from './components/ContactForm';
import Footer from "./components/Footer"


function App() {

  return (
  <>
    <NavBar />
    <Banner />
    <Skills />
    <Projects/>
    <ContactForm/>
    <Footer/>
  </>
  );
}

export default App;
