import { useState, createContext } from 'react'
import './App.css'
import Segment from './Segment';
// import Button from './Button';
import Menu from './Menu';

export const ThemeContext = createContext("light");

function App() {

  const [menuOpen, setMenuOpen]=useState(false);
  const [theme, setTheme] = useState("light");
  const [darkModeButtonText, setDarkModeButtonText] = useState("🌙");

  function togggleMode(){
    if (theme === "dark"){setTheme("light");setDarkModeButtonText("🌙")}
    else{setTheme("dark");setDarkModeButtonText("☀️");}
  }

  return (
    <ThemeContext.Provider value={{theme, togggleMode}}>
      <Segment id={theme} className="segment main-segment">
      <div id={theme} className="main-segment-image-container"></div>
        <div id={theme} className="main-segment-content-container">
          <div style={{width:"100%"}}>
            <button id={theme} className='menu-button darkModeButton' onClick={()=>{togggleMode()}}>{darkModeButtonText}</button>
            <button id={theme} className="menu-button" onClick={()=>{setMenuOpen(!menuOpen)}}>☰</button>
          </div>
          <div style={{width:"100%"}}>{menuOpen && <Menu />}</div>
          <div style={{height:"25%",display:"flex",alignItems:"flex-end"}}><h1>QuickWrite</h1></div><br />
          <div style={{padding:"0% 7% 5% 7%"}}><h2>An autocomplete text editor to help you write at 5x speed.</h2></div>
          <div className="main-button-container"><button className="main-button">Start Writing</button><button className="main-button">Know More</button></div>
        </div>
      </Segment>
      <Segment id={theme} className="segment secondary-segment segment2">
        <div className='secondary-segment-left-top'><h2>Powerful Autocomplete</h2><h3>QuickWrite's powerful autocomplete helps you to accomplish tasks in far lesser than half the actual time.</h3></div>
        <div className='secondary-segment-right-bottom image-container'><div className='image'></div></div>
      </Segment>
      <Segment id={theme} className="segment secondary-segment segment3">
        <div className='secondary-segment-left-top image-container'><div className='image'></div></div>
        <div className='secondary-segment-right-bottom' style={{}}><h2>Write Less, Accomplish More</h2><h3>You focus on ideas, we'll take care of the words.</h3></div>
      </Segment>
      <Segment id={theme} className="segment secondary-segment segment4">
        <div style={{height:"40%",width:"100%",display:"flex",flexDirection:"column",justifyContent:"space-evenly"}}>
          <h2>Try Now</h2><div style={{padding:"0% 7% 5% 7%",textAlign:"center"}}>And experience a new adventure in the world of writing</div>
        </div>
        <button className="main-button">Start Writing</button>
      </Segment>
      <Segment id={theme} className="footer">
        <div className='footer-image-container'></div>
        <div className='footer-content-container'><div>QuickWrite<br />&copy; Anurag Singh</div><div>Made by Anurag Singh</div></div>
      </Segment>
    </ThemeContext.Provider>
  )
}

export default App
