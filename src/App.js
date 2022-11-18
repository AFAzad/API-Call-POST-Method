// import logo from './logo.svg';
import {useState,useEffect} from "react"
import './App.css';

function App() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [mobile,setMobile]=useState('');
  function saveUser(){
    console.log(name,email,mobile);
    let data = {name,email,mobile};
    fetch('https://jsonplaceholder.typicode.com/users',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'content':'application/json',
      },
      body:JSON.stringify(data)
    }).then((result)=>{
      console.log(result);
      result.json().then((response)=>{
        console.log('response',response);
      })
    })
  }
  return (
    <div className="App">
      <h1>API Post Method</h1>
      <input type="text" name='name' onChange={(e)=>{setName(e.target.value)}} value={name} /> <br /><br />
      <input type="text" name='email' onChange={(e)=>{setEmail(e.target.value)}} value={email} /> <br /><br />
      <input type="number" name='mobile' onChange={(e)=>{setMobile(e.target.value)}} value={mobile} /> <br /><br />
      <button type='button' onClick={saveUser} >Save user</button>


    </div>
  );
}

export default App;
