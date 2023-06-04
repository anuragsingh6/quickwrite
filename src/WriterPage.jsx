import { useContext } from 'react';
import { ThemeContext } from './App';
import Writer from "./Writer"

// The page displayed at /writer.
export default function WriterPage(){
    const {theme} = useContext(ThemeContext);
    return (
        <>
        <div id={theme} className="writerpage">
            <h2 style={{marginTop:"3%"}}>QuickWrite Writer</h2>
            <Writer />
        </div>
        </>
    )
}