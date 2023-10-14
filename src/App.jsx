import { useEffect, useState } from 'react'
import './App.css'

function App() {

  // declare a state to store users data 
  const [users, setUsers] = useState([]);
  // load data 
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);
  return (
    <>
      <h1>Users management system</h1>
      <h3>Total number of users: {users.length}</h3>
      <div>
        {
          users.map(user => <p key={user.id}>User name: {user.name}, email:{user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
