import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App(){
  const url = 'http://localhost:5400/test'
  const getInfo = () =>{
    axios.get(url)
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const [name, setname] = useState('')
  const [mail, setmail] = useState('')
  const [password, setpassword] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    const allValues = {name, mail, password}
    console.log(allValues);
    
    const url = 'http://localhost:5400/submit'
    axios.post(url, allValues)
    .then((res)=>{
      console.log(res);
      
    })
    .catch((err) =>{
      console.log(err);
      
    })
  }
  return(
    <>
    <button onClick={getInfo}>Get Info</button>
    <form onSubmit={handleSubmit}>
        <input type="tex" placeholder='Name' value={name}  onChange={(e)=>setname(e.target.value)} />
    <input type="email" placeholder='Email Address' value={mail}  onChange={(e)=>setmail(e.target.value)} />
    <input type="password" placeholder='Password' value={password}  onChange={(e)=>setpassword(e.target.value)} />
    <button type='submit'>Submit</button>
    </form>
    </>
  )
}
export default App