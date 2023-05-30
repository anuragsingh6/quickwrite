import { useState } from 'react'
import './App.css'
import Segment from './Segment';
// import Button from './Button';
import Menu from './Menu';

function App() {

  const [menuOpen, setMenuOpen]=useState(false);

  return (
    <>
    <Segment className="segment main-segment">
      <div style={{width:"100%"}}><button className="menu-button" onClick={()=>{setMenuOpen(!menuOpen)}}>☰</button></div>
      <div style={{width:"100%"}}>{menuOpen && <Menu />}</div>
      <div style={{height:"25%",display:"flex",alignItems:"flex-end"}}><h1>QuickWrite</h1></div><br />
      <div style={{padding:"0% 7% 5% 7%"}}><h2>An autocomplete text editor to help you write at 5x speed.</h2></div>
      <div className="main-button-container"><button className="main-button">Start Writing</button><button className="main-button">Know More</button></div>
    </Segment>
    <Segment className="segment secondary-segment" style={{backgroundColor:"white",backgroundImage:'linear-gradient(to bottom,#ffcfc0,white)'}}>
      <div className='secondary-segment-left-top'><h2>Powerful Autocomplete</h2><h3>QuickWrite's powerful autocomplete helps you to accomplish tasks in far lesser than half the actual time.</h3></div>
      <div className='secondary-segment-right-bottom'></div>
    </Segment>
    <Segment className="segment secondary-segment" style={{backgroundColor:"white",backgroundImage:'linear-gradient(to bottom,white,#ffcfc0)'}}>
      <div className='secondary-segment-left-top'></div>
      <div className='secondary-segment-right-bottom' style={{}}><h2>Write Less, Accomplish More</h2><h3>You focus on ideas, we'll take care of the words.</h3></div>
    </Segment>
    <Segment className="segment secondary-segment" style={{backgroundColor:"#ffcfc0",display:"flex",flexDirection:"column",justifyContent:"center"}}>
      <div style={{height:"40%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
        <h2>Try Now</h2><div style={{padding:"0% 7% 5% 7%",textAlign:"center"}}>And experience a new adventure in the world of writing</div></div>
        <button className="main-button">Start Writing</button>
    </Segment>
    <Segment className="footer"><div>QuickWrite<br />&copy; Anurag Singh</div><div>Made by Anurag Singh</div></Segment>
    </>
  )
}

export default App
