import { createContext, useContext } from "react";
import { ThemeContext } from "./App";
import { Link } from "react-router-dom";

export default function Page404(){
    const {theme} = useContext(ThemeContext);
    return (
        <>
        <div id={theme} className="page404">
            <h1>Error 404</h1>
            <h2>Page Not Found</h2>
            <Link to="/"><h2 style={{textShadow:"1vh 1vh 1vh #af5f50"}}>Go Home</h2></Link>
        </div>
        </>
    )
}