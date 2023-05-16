
/*

import "./App.css";
import { useState } from "react";
import MyButton from "./Component/MyButton";

function App() {
  const [list, setList] = useState([1,2,3,4,5]);
  const changeList = () => {
   setList([...list, list.at(-1) + 1])
  }
  return (
      <div>
      <MyButton title={"+"} handleClick={(changeList)} />
     {
     list.map((item,index ) =><p style={{color: item%10?'black':'red'}} key={index.toString()} > {item} </p>)
 
     }
     
     
      </div>
  
  );
}

export default App;
*//*
import {useEffect, useState} from "react";
import LoginForm from "./components/LoginForm";
import './App.css';

function App(){
  const [formValues, setformValues] =useState({email:'', password:'', remember:false});
  const [isLogedin, setisLogedin] = useState(false)

  const onChange =(event) =>{
    if(event.target.name === 'remember'){
      setformValues({...formValues, [event.target.name]: event.target.checked})
    }else{
      setformValues({...formValues, [event.target.name]: event.target.value})
    }
  }


  const handleLogin =(event)=>{
    event.preventDefault();
    if(formValues.remember){
      localStorage.setItem('userData', JSON.stringify(formValues))
    }else{
      sessionStorage.setItem('userData', JSON.stringify(formValues))
    }
    setisLogedin(true);

  }
  const logout =()=>{
    localStorage.clear();
    sessionStorage.clear();
    setisLogedin(false);
  }
  useEffect(()=>{
    const userData = localStorage.getItem("userData")|| sessionStorage.getItem("userData");
    if(userData){
      setisLogedin(true)
    }
  })

  return(
    <div>
      {isLogedin?
      <div>
        <p>Test</p>
        <button onClick={logout}>Logout</button>
      </div>
      :<LoginForm
      onChange={onChange}
      handleLogin={handleLogin}
      />
      }
    </div>
  )
}

export default App;

*/

import {useEffect, useState} from "react";

function App(){
   const [users, setUsers] = useState([]);

   useEffect(() =>{
      fetch('https://api.github.com/users').then(res=>res.json()).then(setUsers)
   }, [])



return (
    <div>
      {
      users.map(item=><div key={item.id}>
         <p>{item.id}</p>
         {/* <img src = {item.avatar_url}/> */}
      </div>)

}

</div>

);

}

export default App;
