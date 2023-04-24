import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import{Link} from 'react-router-dom';

const Single =(props)=>{

    const[single, setSingle]= useState({});
    const {id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8001/api/products/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setSingle(res.data);
            })
            .catch((err)=> console.log(err))
    },[])

    return(
        <div>
            <h2>{single.title}</h2>
            <p>Price: $ {single.price}</p>
            <p>Description:  {single.description}</p>
            <Link to ="/">Go Home!</Link>
        </div>
    )
}
export default Single;