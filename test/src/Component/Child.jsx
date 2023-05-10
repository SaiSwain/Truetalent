import React from "react"
import {GoTrashcan}from "react-icons/go";
import "./Child.css"
const Child=(props)=>{
    return(
<div className="main">
    <div className="card">
 < GoTrashcan onClick={()=>{
     props.onSelect(props.id)
     }}className="sai1"/>
    <li>{props.text}</li>
    </div>             
</div>
    )
}
export default Child;