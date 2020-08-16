import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const currentTurn =useState("x")
  const [board,setBoard] = useState([
    {id:0,value:null},
    {id:1,value:null},
    {id:2,value:null},
    {id:3,value:null},
    {id:4,value:null},
    {id:5,value:null},
    {id:6,value:null},
    {id:7,value:null},
    {id:8,value:null}
  ])
  const handleGame = (e)=>{

  }
  return (
    <>
    <Header turn={currentTurn}/>
    <div id="game">
    <div id="board">
  <div id={0} onClick={(e)=>handleGame(e)} className="cell">{board[0].value}</div>
      <div id={1} onClick={(e)=>handleGame(e)} className="cell">{board[1].value}</div>
      <div id={2} onClick={(e)=>handleGame(e)} className="cell">{board[2].value}</div>
      <div id={3} onClick={(e)=>handleGame(e)} className="cell">{board[3].value}</div>
      <div id={4} onClick={(e)=>handleGame(e)} className="cell">{board[4].value}</div>
      <div id={5} onClick={(e)=>handleGame(e)} className="cell">{board[5].value}</div>
      <div id={6} onClick={(e)=>handleGame(e)} className="cell">{board[6].value}</div>
      <div id={7} onClick={(e)=>handleGame(e)} className="cell">{board[7].value}</div>
      <div id={8} onClick={(e)=>handleGame(e)} className="cell">{board[8].value}</div>
    </div>
    </div>
    </>
  );
}

export default App;
