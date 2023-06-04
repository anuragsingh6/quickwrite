import { useContext, useState } from "react";
import { ThemeContext } from "./App";

let wordsfile;let wordsObj;let words;let possibleWords=[];let searchWord="";let lastSpace;let listWords=[];

async function loadDictionary(){
    wordsfile=await fetch('./src/words.txt');
    wordsObj=await wordsfile.json();
    words=wordsObj.words;
}
loadDictionary();

// The writer component.
export default function Writer(){
    const {theme} = useContext(ThemeContext);
    const [FONTSIZE, setFONTSIZE] = useState(20);
    const [text, setText] = useState("");   //This text stores the input of the textarea(writerText)

    // This function searches for a given input in the words array for matches, stores the matches in possibleWords array and calls functions that display suggestions.
    function searchWords(){
        possibleWords=[];lastSpace=0;

        // This function searches for a substring inside every word in the words array for matches.
        function matchingWordFinder(){
            for (let i=0;i<words.length;i++){if (words[i].toLowerCase().includes(searchWord.toLowerCase())){possibleWords.push(words[i]);};};
        }

        if ((writerText.value.charAt(writerText.value.length-1)===" ")||(writerText.value==="")){possibleWords=[];updateMatchingWordList()}
        else if ((writerText.value.includes(" "))||(writerText.value.includes("\n"))){
            for (let i=0;i<writerText.value.length;i++){
                if ((writerText.value.charAt(i)===" ")||(writerText.value.charAt(i)==="\n")){lastSpace=i}
            };
            searchWord=writerText.value.substring(lastSpace+1);
            if (searchWord!==""){matchingWordFinder();updateMatchingWordList();}
        }
        else{searchWord=writerText.value;matchingWordFinder();updateMatchingWordList();};
    };

    // This function adds the top 10 words from the possibleWords array to listWords array, then each of these words is added as an element to the suggestions list.
    function updateMatchingWordList(){
        matchingWordsList.innerHTML="";listWords=[];for (let i=0;i<10;i++){listWords.push(possibleWords[i])};
        listWords.map((value, key)=>{if (value!==undefined){matchingWordsList.innerHTML+=`<div key=${key} class="matchingWordElement">${value}</div>`;}})
    };

    // The following two lines attach the function below(appendWord) to click event of each element in the Suggestions list.
    let matchingWordsElement=document.getElementsByClassName("matchingWordElement");
    for (let i=0;i<matchingWordsElement.length;i++){matchingWordsElement[i].addEventListener("click",appendWord)};

    // This function adds the word to the end of the text in the textarea when a suggested word is clicked.
    function appendWord(){
        let word=this.innerText;let preSpace="";let newLine=false;
        function capitalizeWord(){word=word.charAt(0).toUpperCase()+word.substring(1);};

        if ((lastSpace===0)||(writerText.value.charAt(lastSpace)==="\n")){preSpace="";capitalizeWord()}else{preSpace=" "};
        if (".!?".includes(writerText.value.charAt(lastSpace-1))){capitalizeWord()};
        if (writerText.value.charAt(lastSpace-1)==="\n"){capitalizeWord();newLine=true;}
        newLine ? setText(text.substring(0,lastSpace+1)+preSpace+word+" ") : setText(text.substring(0,lastSpace)+preSpace+word+" ");
        possibleWords=[];listWords=[];matchingWordsList.innerHTML="";
        writerText.focus();
    };

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