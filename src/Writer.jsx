import { useContext } from "react";
import { ThemeContext } from "./App";

export default function Writer(){
    const {theme} = useContext(ThemeContext);
    return (
        <>
        <div className="writer">
        <div id={theme} className="writer-buttons">
            <button type="button"></button>
        </div>
        <textarea id={theme} className="writer-text" style={{height:"90%"}}></textarea>
        </div>
        </>
    )
}