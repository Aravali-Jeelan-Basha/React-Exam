import React,{useState} from 'react'


function Testing() {
  // const [number,setNumber]=useState(0);
  //   const [counter,setCounter]=useState(0);
  //   function num1(number1){
  //       console.log("Done!!!");
  //       return Math.pow(number1,3);
  //   }
  //   const result=num1(number)
  // return (
  //   <>
  //     <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)}/>
  //     <h1>Cube of number: {result}</h1>
  //     <button onClick={(e)=> setCounter(counter+1)}>counter++</button>
  //     <h2>Counter: {counter}</h2>
  //   </>
  // )

  const [name,setName]=useState("")
  const [array,setArray]=useState([])

  const output2=(e)=>{
    setName(e.target.value)
  }

  const output = ()=>{
    setArray((prevArray) => [...prevArray,name])

  }

  

  

  return (
    <div>
      <input type="text" onChange={output2}/>
      <button onClick={output}>Enter Data</button>
      <ul>
      {array.map((obj) => <li>{obj}</li>)}
      </ul>
      
      
    </div>
  )
}

export default Testing