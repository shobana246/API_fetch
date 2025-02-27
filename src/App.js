import React, { useState, useEffect } from 'react';

const App = () => {
  const [users,setUsers]= useState([]);
  const [loading , setLoading ] = useState(true);


  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((data)=>{
        setUsers(data);
        console.log(data)
        setLoading(false);
      });
    }, []);
  
return (
  <div>
    <h1>User List</h1>
    { loading? (<p>Loading...</p>): (<ul>{users.map((User)=>(
      <li key={User.id}><h3>{User.name}</h3><p>{User.email}</p></li>
    ))}</ul>)}
    </div>
   )

  }
export default App ;