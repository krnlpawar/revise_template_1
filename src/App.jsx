import './App.css'
import Block from './components/Block'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Quote from './components/Quote'
import Service from './components/Service'
import Slider from './components/Slider'
import Team from './components/Team'

function App() {
  return (
    <>
      <Header/>
      <Slider/>
      <Block/>
      <Team/>
      <Service/>
      <Portfolio/>
      <Quote/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
