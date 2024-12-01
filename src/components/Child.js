import React,{useState} from "react"

const Child=()=>{
    const [data,setdata]=useState({brand:"RollsRoyce",color:"red"})

    const five1=()=>{
        setdata({brand:"BMW",color:"green"})
    }

    const {brand,color}=data

    return(
        <div>
            <p style={{backgroundColor:color}}>My Favourite brand is {brand}</p>
            <p>I like {color} colour</p>
            <button onClick={five1}>Click Here!</button>
        </div>
    )

}

export default Child