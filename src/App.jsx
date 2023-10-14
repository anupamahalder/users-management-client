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
  // function 
  const handleAddUser = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    // we can create an object 
    const user = {name,email};
    // console.log(name,email);
    console.log(user);
    // send information as an object in an url using fetch method 
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers: {
        'content-type':'application/json',
      },
      // send data in body to make it stringified 
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log('inside post response',data)
    })
  }
  return (
    <>
      <h1>Users management system</h1>
      <h3>Total number of users: {users.length}</h3>
      <div>
        {
          users.map(user => <p key={user.id}>User name: {user.name}, email:{user.email}</p>)
        }
      </div>
      {/* send users data to the backend  */}
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder='Enter name'/><br />
        <input type="email" name="email" placeholder='Enter email' /><br />
        <input type="submit" value="Add User" /><br />
      </form>
    </>
  )
}

export default App
