import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UsersTable from './components/UsersTable';
import AddUserForm from './components/AddUserForm';

function App() {
  const [users, setUsers] = useState([]);


  const fetchUsers = async () => {
    const allUsers = await fetch("http://localhost:5000/api/users/");
    const allUsers2 = await allUsers.json();
    setUsers(allUsers2);
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/api/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  };

  const addUser = async (user) => {
    await fetch("http://localhost:5000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    // await axios.post(`http://localhost:5000/api/users`,user) 
    fetchUsers(); // refresh the list
  }

  useEffect(() => {
    fetchUsers();
  }, []);



  return (
    <>

      <AddUserForm onAdd={addUser}/>
      <UsersTable users={users} onDelete={deleteUser} />

    </>
  )
}

export default App
