import React,{useState} from 'react';
import axios from 'axios';

const Create =(props)=>{

    const{productlist,setProductlist}=props;

    const[title,setTitle]= useState("");
    const[price,setPrice]= useState("");
    const[description,setDescription]= useState("");

    const submitHandler =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8001/api/products", {title,price,description})
            .then ((res)=>{
                console.log(res);
                console.log(res.data);
                setProductlist([...productlist,res.data])
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err)=>{
                console.log(err);
            });
    }
    return(
        <div>
            <header>Product Manger</header>
            <br/>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input onChange={(e)=> setTitle(e.target.value)}value={title} name="title" type="text"/>
                </div>
                <br/>
                <div>
                    <label>Price</label>
                    <input onChange={(e)=> setPrice(e.target.value)}value={price} name="price" type="number"/>
                </div>
                <br/>
                <div>
                    <label>Description</label>
                    <input onChange={(e)=> setDescription(e.target.value)}value={description} name="description" type="text"/>
                </div>
                <br/>
                <input type = "submit" className="submit-input" value="Create"/>
            </form>
        </div>
    )
}
export default Create;