import { useContext } from 'react';
import { ThemeContext } from './App';
import Menu from './Menu';

export default function Navbar(props){
  const {theme, togggleMode, darkModeButtonText} = useContext(ThemeContext);
    return (
        <>
        <div className="Navbar" style={{width:"100%"}}>
        <button id={theme} className='menu-button darkModeButton' onClick={togggleMode}>{darkModeButtonText}</button>
        <div style={{float:"right",display:"flex",flexDirection:"column"}}>
          <button id={theme} className="menu-button" onClick={()=>{props.setMenuOpen(!props.menuOpen)}}>☰</button>
          <div id={theme} style={{width:"100%"}}>{props.menuOpen && <Menu />}</div>
        </div>
      </div>
      {/* <Navbar id={theme} darkModeButtonText={darkModeButtonText} menuOpen={menuOpen} /> */}
      </>
    )
    
}