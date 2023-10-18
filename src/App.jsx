import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // declare a state to hold user data 
  const [users, setUsers] = useState([]);

  // load data using useEffect hook for one time loading we will give and empty array dependency
  useEffect(()=>{
    // the url will be the url where the users data is present in server 
    fetch('http://localhost:5001/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[]);

  const handleAddUser = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // create an object to have name, email and password as their property 
    //  if both value and property name is same then we can write only once not required key value pair 
    const newUser = {name, email, password};
    console.log(newUser);
  }

  return (
    <>
      <h1>Users management system</h1>
      <p>Total users: {users.length}</p>
      {/* Now we want to send data to backend/server  */}
      <form onSubmit={handleAddUser}>
        <input type="text" name='name' placeholder='Enter your name' required autoComplete='username'/><br />
        <input type="email" name='email' placeholder='Enter your email' required autoComplete='email'/><br />
        <input type="password" name='password' placeholder='Enter your password' required autoComplete="off" /><br />
        <input type="submit" value="Add User" />
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>User ID: {user.id}, User name: {user.name},
          User age: {user.age} </p>)
        }
      </div>
    </>
  )
}

export default App
