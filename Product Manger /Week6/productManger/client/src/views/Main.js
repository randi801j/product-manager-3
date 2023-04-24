import React,{useState,useEffect} from 'react';
import Create from '../components/Create';
import DisplayAll from '../components/DisplayAll';

const Main = (props)=>{

    const[productlist,setProductlist]=useState ([]);

    return(
        <div>
            <Create productlist={productlist} setProductlist={setProductlist}/>
            <br/>
            <DisplayAll productlist={productlist} setProductlist={setProductlist}/>
        </div>
    )
}

export default Main;