import React,{useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

export default function Home() {
    const [data, setData] = useState({});
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/albums").then((response)=>{
            setData(response.data);
            console.log(response.data);
        });
    },[]);
  return (
    <>
        <h1>Albums</h1>
    <div className='card-box'> 
    { data.length > 0 && data.map((data, Index) =>
    
        <div key={Index} className='card-items'>
            <h4>Id &nbsp;: {data.id}</h4>
            <Link to={`details/${data.id}`} >Title &nbsp;: {data.title}</Link>
        </div>
    )
    }
       

    </div>
    </>
  )
}
