import React, { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Pop from './components/Modal';
import axios from "axios"
function App() {
  const [show,setShow]=useState(false)
  const [currentPlayer,setCurrentPlayer] =useState("x")
  const [board,setBoard] = useState([Array(9).fill("")])
  const [record,setRecord] = useState([])
  const [time,setTime]=useState(Math.round(new Date().getTime() / 1000))
  const [checker,setChecker]=useState(0)
  const check = ()=>{
    if(checkWinner()){
      setChecker(prev=>(Math.round(new Date().getTime() / 1000)-time))
      setShow(true)
      endGame()}
      else if(count===9){
        alert("It's a tie")
        endGame()
    }
  }
  useEffect(async ()=>{
    const res =await axios.get("/api/v1/records")
    setRecord(res.data)
  },[])
  const  done = async ()=>{
    setShow(false)
    const res =await axios.get("/api/v1/records")
    setRecord(res.data)
  }
  const endGame = ()=>{
    try{
      setCurrentPlayer("x")
      setCount(0)
      setBoard([Array(9).fill("")])
      setTime(Math.round(new Date().getTime() / 1000))
      }catch(e){}
  }
  const [count,setCount] =useState(0)
  const compare = (x,y,z)=>{
    
        if(x.length>0 && y.length>0 && z.length>0){
        return (x=== y && y=== z && x=== z)
        }
      }
  const checkWinner = ()=>{
    if (compare(board[count][0],board[count][1],board[count][2])){
        return true
    }
    
    if (compare(board[count][3],board[count][4],board[count][5])){
        return true
    }
    
  
    if (compare(board[count][6],board[count][7],board[count][8])){
        return true
    }
    if (compare(board[count][0],board[count][4],board[count][8])){
        return true
    }
    if (compare(board[count][2],board[count][4],board[count][6])){
        return true
    }
    if (compare(board[count][0],board[count][3],board[count][6])){
        return true
    }
    if (compare(board[count][1],board[count][4],board[count][7])){
        return true
    }
    if (compare(board[count][2],board[count][5],board[count][8])){
        return true
    }
    return false
}
  const handleGame = (e)=>{
    if (e.target.innerText.length<1){
      board.splice(count+1,board.length-count)
      let arr = board[count].slice()
      arr[Number(e.target.id)]=currentPlayer
      setBoard((prev)=>prev.concat([arr]))      
      setCount(count+1)
      setCurrentPlayer((prev)=>prev==="x"?"o":"x")

  
}
  }
  return (
    <>
    <Header turn={currentPlayer}/>
    {show&&<Pop show={show} time={checker} done={done} />}
    <div className="scores">
          <div className="column"  >
          <h2>Winner</h2>
            <ul>
                {
                  record.map((item,index)=>{
                  return <li className="list" key={index}>{index+1}. {item.name}</li>
                  })
                }
            </ul>
          </div>
          <div className="column">
            <h2>Date</h2>
            <ul>
            {
                  record.map((item,index)=>{
                    return <li key={index}>{index+1}. {item.date}</li>
                  })
                }
            </ul>
          </div>
          <div className="column" >
            <h2>Duration</h2>
            <ul>
            {
                  record.map((item,index)=>{
                    return <li className="list" key={index}>{index+1}. {item.time}</li>
                  })
                }
            </ul>

          </div>
    </div>
    <div id="game">  
      
    <div id="board" >
      <div onMouseOut={check} id={0} onClick={(e)=>handleGame(e)} className={board[count][0].length>0?"checked":"cell"}>{board[count][0]}</div>
      <div onMouseOut={check} id={1} onClick={(e)=>handleGame(e)} className={board[count][1].length>0?"checked":"cell"}>{board[count][1]}</div>
      <div onMouseOut={check} id={2} onClick={(e)=>handleGame(e)} className={board[count][2].length>0?"checked":"cell"}>{board[count][2]}</div>
      <div onMouseOut={check} id={3} onClick={(e)=>handleGame(e)} className={board[count][3].length>0?"checked":"cell"}>{board[count][3]}</div>
      <div onMouseOut={check} id={4} onClick={(e)=>handleGame(e)} className={board[count][4].length>0?"checked":"cell"}>{board[count][4]}</div>
      <div onMouseOut={check} id={5} onClick={(e)=>handleGame(e)} className={board[count][5].length>0?"checked":"cell"}>{board[count][5]}</div>
      <div onMouseOut={check} id={6} onClick={(e)=>handleGame(e)} className={board[count][6].length>0?"checked":"cell"}>{board[count][6]}</div>
      <div onMouseOut={check} id={7} onClick={(e)=>handleGame(e)} className={board[count][7].length>0?"checked":"cell"}>{board[count][7]}</div>
      <div onMouseOut={check} id={8} onClick={(e)=>handleGame(e)} className={board[count][8].length>0?"checked":"cell"}>{board[count][8]}</div>
    </div>
    <ol id="history">
    {
                board.map((k,i)=>{
                return  <li key={i}><button onClick={()=>{
                    setCount(i)
                    setCurrentPlayer(i%2===0?"x":"o")}}>Go to step {i+1}</button></li>
                })
            }
              
    </ol>
    </div>
    </>
  );
}

export default App;
