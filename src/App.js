import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const [currentTurn,setCurrentTurn] =useState("x")
  const [board,setBoard] = useState([
    {id:0,value:"",class:"cell"},
    {id:1,value:"",class:"cell"},
    {id:2,value:"",class:"cell"},
    {id:3,value:"",class:"cell"},
    {id:4,value:"",class:"cell"},
    {id:5,value:"",class:"cell"},
    {id:6,value:"",class:"cell"},
    {id:7,value:"",class:"cell"},
    {id:8,value:"",class:"cell"}
  ])
    
  const endGame = ()=>{
    setBoard([
      {id:0,value:"",class:"cell"},
    {id:1,value:"",class:"cell"},
    {id:2,value:"",class:"cell"},
    {id:3,value:"",class:"cell"},
    {id:4,value:"",class:"cell"},
    {id:5,value:"",class:"cell"},
    {id:6,value:"",class:"cell"},
    {id:7,value:"",class:"cell"},
    {id:8,value:"",class:"cell"}
    ])
  }
  const [count,setCount] =useState(0)
  const compare = (x,y,z)=>{
    
        if(x.value.length>0 && y.value.length>0 && z.value.length>0){
        return (x.value=== y.value && y.value=== z.value && x.value=== z.value)
        }
      }
  const checkWinner = ()=>{
    if (compare(board[0],board[1],board[2])){
        return true
    }
    
    if (compare(board[3],board[4],board[5])){
        return true
    }
    
  
    if (compare(board[6],board[7],board[8])){
        return true
    }
    if (compare(board[0],board[4],board[8])){
        return true
    }
    if (compare(board[2],board[4],board[6])){
        return true
    }
    if (compare(board[0],board[3],board[6])){
        return true
    }
    if (compare(board[1],board[4],board[7])){
        return true
    }
    if (compare(board[2],board[5],board[8])){
        return true
    }
    return false
}
  const handleGame = (e)=>{
    if (e.target.innerText.length<1){
      setCount(count+1)
      let arr = board.slice()
      for(let item of arr){
        if(item.id==e.target.id){
          item.value=currentTurn
          item.class="checked"
        }
      }
      setBoard(arr)
      
      e.target.className="checked"
      if(checkWinner()){
          alert(currentTurn+" won")
          endGame()

      }
      if(count===8){
          alert("It's a tie")
          endGame()
      }
      setCurrentTurn((prev)=>prev==="x"?"o":"x")

  
}
  }
  return (
    <>
    <Header turn={currentTurn}/>
    <div id="game">
    <div id="board">
      <div id={0} onClick={(e)=>handleGame(e)} className={board[0].class}>{board[0].value}</div>
      <div id={1} onClick={(e)=>handleGame(e)} className={board[1].class}>{board[1].value}</div>
      <div id={2} onClick={(e)=>handleGame(e)} className={board[2].class}>{board[2].value}</div>
      <div id={3} onClick={(e)=>handleGame(e)} className={board[3].class}>{board[3].value}</div>
      <div id={4} onClick={(e)=>handleGame(e)} className={board[4].class}>{board[4].value}</div>
      <div id={5} onClick={(e)=>handleGame(e)} className={board[5].class}>{board[5].value}</div>
      <div id={6} onClick={(e)=>handleGame(e)} className={board[6].class}>{board[6].value}</div>
      <div id={7} onClick={(e)=>handleGame(e)} className={board[7].class}>{board[7].value}</div>
      <div id={8} onClick={(e)=>handleGame(e)} className={board[8].class}>{board[8].value}</div>
    </div>
    </div>
    </>
  );
}

export default App;
