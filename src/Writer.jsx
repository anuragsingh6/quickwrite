import { useContext, useState } from "react";
import { ThemeContext } from "./App";

let wordsfile;let words;let possibleWords=[];let searchWord="";let lastSpace;let listWords=[];
wordsfile=await fetch('./src/words.txt');
let wordsObj=await wordsfile.json();
words=wordsObj.words;

export default function Writer(){
    const {theme} = useContext(ThemeContext);
    const [FONTSIZE, setFONTSIZE] = useState(20);
    const [text, setText] = useState("");

    function searchWords(){
        possibleWords=[];lastSpace=0;

        function matchingWordFinder(){
            for (let i=0;i<words.length;i++){if (words[i].toLowerCase().includes(searchWord.toLowerCase())){possibleWords.push(words[i]);}};
        }

        if ((writerText.value.charAt(writerText.value.length-1)===" ")||(writerText.value==="")){possibleWords=[];}
        else if (writerText.value.includes(" ")){
            for (let i=0;i<writerText.value.length;i++){if (writerText.value.charAt(i)===" "){lastSpace=i}};searchWord=writerText.value.substring(lastSpace+1);
            console.log(lastSpace,searchWord);matchingWordFinder();addMatchingWordsToList();
        }
        else{searchWord=writerText.value;matchingWordFinder();addMatchingWordsToList();}
        // console.log("possibleWords:",possibleWords);
    }

    let wordElements=document.getElementsByClassName("matchingWordElement");
    for (let i=0;i<wordElements.length;i++){wordElements[i].addEventListener("click",appendWord)};

    function appendWord(){
        let preSpace="";if (lastSpace===0){preSpace=""}else{preSpace=" "}
        setText(text.substring(0,lastSpace)+preSpace+this.innerText+" ");
        possibleWords=[];listWords=[];matchingWordsList.innerHTML="";
    }

    function addMatchingWordsToList(){
        matchingWordsList.innerHTML="";listWords=[];for (let i=0;i<10;i++){listWords.push(possibleWords[i])};
        listWords.map((value, key)=>{if (value!==undefined){matchingWordsList.innerHTML+=`<div key=${key} class="matchingWordElement">${value}</div>`;}})
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
        <div style={{height:"100%",width:"100%",display:"flex",flexDirection:"row"}}>
        <textarea id="writerText" className={`writer-text ${theme}`} style={{fontSize:`${FONTSIZE}px`}} value={text} onChange={(e)=>{setText(e.target.value);searchWords();}}></textarea>
        <div id="matchingWordsSidebar" className={theme}><div id="Suggestions">Suggestions</div><div id="matchingWordsList"></div></div>
        </div>
        </div>
        </>
    )
}