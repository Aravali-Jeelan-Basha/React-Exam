import React,{useEffect,useState} from "react"

const Array1=()=>{
    const [data,setdata]=useState([])


    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(result => setdata(result))
        .catch(error => {
            console.log("error occured"+error)
        })

    },[])
    
    return(
        <div>
            <h1>This is our required data</h1>
            <ul>
                {data.map(obj => <li>{obj.title}</li>)}
            </ul>
        </div>
    )

}

export default Array1



