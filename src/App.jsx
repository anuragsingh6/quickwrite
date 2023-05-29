import { useState } from 'react'
import './App.css'
import Section from './Section';
// import Button from './Button';

function App() {

  const [tasks, setTasks]=useState([]);
  const [newTask, setNewTask]=useState("");
  
  function deleteTask(currentTask){setTasks(tasks.filter((task)=>{return task !== currentTask}))}
  function completeTask(currentTask){setTasks(tasks.map((task)=>{if (task===currentTask){return{...task,completed:true}}else{return task}}));}

  return (
    <>
    <Section className="div main-div">
      <div style={{width:"100%"}}><button className="menu-button">☰</button></div>
      <div style={{height:"25%",display:"flex",alignItems:"flex-end"}}><h1>QuickWrite</h1></div><br />
      <div style={{padding:"0% 7% 5% 7%"}}><h2>An autocomplete text editor to help you write at 5x speed.</h2></div>
      <div className="main-button-container"><button className="main-button">Start Writing</button><button className="main-button">Know More</button></div>
    </Section>
    <Section className="div secondary-div">
    </Section>
    </>
  )
}

export default App
