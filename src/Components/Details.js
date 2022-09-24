import React, {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

let styleSheet = {
    ImageSize :{
        width:"22rem",
        height:"20rem",
        borderRadius:"14px"

    }
}

export default function Details() {
    const [imageDetails, setImageDetails] = useState({});
    let {id} = useParams();

    useEffect( () =>{
       
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then((response)=>{
            setImageDetails(response.data);
            console.log(response.data);
        });
    },[id]);


    if(!imageDetails) return <div>Loading...</div>;
  return (
    <div>
        <div className='details-card-box'>

        { imageDetails.length >0 && imageDetails.map((imageDetails,Index) =>

        <div className='details-card-items' key={Index}>
            <img style={styleSheet.ImageSize} src={imageDetails.url} alt={imageDetails.title}  />
            <h3> Id : {imageDetails.id}</h3>
            <h3> Albums Id : {imageDetails.albumId}</h3>
            <h3> Title : {imageDetails.title}</h3>
            
        </div>
            
        )
           
        }
        </div>

         
    </div>
  );
}
