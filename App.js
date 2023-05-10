import React,{useState} from 'react'
import "./App.css"
import { FaSistrix} from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";

function App() {
    const [serch, setserch] = useState(false)
    const[find, setfind] = useState(false)
    let increment=()=> {
        setserch(!serch);
        setfind(false);
    }
    let  decrement=()=> {
        setfind(!find);
        setserch(false)
    }
  return (
    <div>
      <h2>Get the <span className='heading'>Right Job</span> You Deserve</h2>
      <p>Your next career move starts here</p>
      <button  id="button" type="submit" onClick={increment}className='btn' style={{backgroundColor:serch ? "#c4fae8":"white"}}>Search Jobs</button>
      <button  type="submit" onClick={decrement}className='btn' style={{backgroundColor:find ? "#c4fae8":"white"}}>Search Candidates</button>
      <div className='container'>
        <div className='search-box1'>
        <FaSistrix className='search-icon'/><input type="search"id="one" className='send'placeholder='Skill/job roles'   />
        </div>
<div className='search-box2'>
<HiMapPin /><input type="search"className='send'id="two" placeholder='City'  />
</div>
<button className='search'><FaSistrix className='sai'/>Search</button>

      </div>
     
    </div>
  )
}

export default App