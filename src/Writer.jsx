import { useContext, useState } from "react";
import { ThemeContext } from "./App";

let wordsfile;let words;let possibleWords=[];let searchWord="";
wordsfile=await fetch('./src/words.txt');
let wordsObj=await wordsfile.json();
words=wordsObj.words;

export default function Writer(){
    const {theme} = useContext(ThemeContext);
    const [FONTSIZE, setFONTSIZE] = useState(20);
    const [text, setText] = useState("");

    function searchWords(){
        possibleWords=[];

        function matchingWordFinder(){
            for (let i=0;i<words.length;i++){if (words[i].includes(searchWord.toLowerCase())){possibleWords.push(words[i]);}};
        }

        if (writerText.value.charAt(writerText.value.length-1)===" "){possibleWords=[];}
        else if (writerText.value.includes(" ")){
            let lastSpace=0;for (let i=0;i<writerText.value.length;i++){if (writerText.value[i]===" "){lastSpace=i}};searchWord=writerText.value.substring(lastSpace+1);
            console.log(lastSpace,searchWord);matchingWordFinder();
        }
        else{searchWord=writerText.value;matchingWordFinder();}
        console.log("possibleWords:",possibleWords);
        addMatchingWordsToList();
    }

    function addMatchingWordsToList(){
        // for (let i=0;i<possibleWords.length;i++){}
        matchingWordsList.innerHTML="";
        let listWords=[];for (let i=0;i<10;i++){listWords.push(possibleWords[i])};
        if (listWords.length!==0){listWords.map((value, key)=>{matchingWordsList.innerHTML+=`<div key=${key}>${value}</div>`;})}
        else{matchingWords.innerHTML="";};
        
    }

    return (
        <>
        <div className="writer">
        <div id={theme} className="writer-buttons">
            <div className="writer-button" style={{textAlign:"center",backgroundColor:"#751c01",color:"white",fontWeight:"bold",fontStyle:"italic"}}>Q</div>
            <div className="writer-button-break"></div>
            <button id={theme} type="button" className="writer-button" onClick={()=>{setFONTSIZE(FONTSIZE+2);writerInputFontSize.value=FONTSIZE;}}>A+</button>
            <input id="writerInputFontSize" type="number" min="1" max="100" value={FONTSIZE} onChange={()=>{setFONTSIZE(writerInputFontSize.value);}} className={`writer-input-font-size ${theme}`} />
            <button id={theme} type="button" className="writer-button" onClick={()=>{setFONTSIZE(FONTSIZE-2);writerInputFontSize.value=FONTSIZE;}}>A-</button>
            <div className="writer-button-break"></div>
            <button id={theme} type="button" className="writer-button" onClick={()=>{setText("");}} style={{width:"auto",padding:"0 1% 0 1%",float:"right",right:"0"}}>Clear All Text</button>
        </div>
        <textarea id="writerText" list="matchingWordsList" className={`writer-text ${theme}`} style={{fontSize:`${FONTSIZE}px`}} value={text} onChange={(e)=>{setText(e.target.value);searchWords();}}></textarea>
        <div id="matchingWordsList" className={theme}></div>
        </div>
        </>
    )
}