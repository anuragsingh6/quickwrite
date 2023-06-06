import { useState, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar';
import MainPage from './MainPage';
import WriterPage from './WriterPage';
import Page404 from './Page404';

export const ThemeContext = createContext("light");

// The main app component.
function App() {

    const [menuOpen, setMenuOpen]=useState(false);
    const [theme, setTheme] = useState("light");
    const [darkModeButtonText, setDarkModeButtonText] = useState("🌙");

    // Function that handles toggling of dark and light mode.
    function togggleMode(){
      if (theme === "dark"){setTheme("light");setDarkModeButtonText("🌙")}
      else{setTheme("dark");setDarkModeButtonText("☀️");}
    }

    return (
      <ThemeContext.Provider value={{theme, togggleMode, darkModeButtonText}}>
        <Router basename='/quickwrite'>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/writer" element={<WriterPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </ThemeContext.Provider>
    )
}

export default App
