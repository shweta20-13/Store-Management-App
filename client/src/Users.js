import { Header } from "./Header";
import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const Users = () => {
  // Logic
  const navigate=useNavigate();
  const [Users, setUsers] = useState([]);
  const prince = (message) => {
    console.log(message);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userdata=await fetch(`https://jsonserver-iota.vercel.app/user`,{
        method:'GET'
      });
    const result=await userdata.json();
    setUsers(result);
    } catch (error) {
      prince(error);
    }
  };

  async function removeItem(id) {
    try {
      const response = await fetch(`https://jsonserver-iota.vercel.app/user/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete product!');
      }

      const updateduser = Users.filter(user => user.id !== id);
      setUsers(updateduser);
    } catch (error) {
      prince(error);
    }
  }

  function showUser(user){
   if(user){
    navigate(`/user/${user}`);
   }
  }

  // DOM
  return (
    <div className="container-fluid">
      <Header />
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Sno</th>
              <th>User Name</th>
              <th>Action-del</th>
              <th>Action-edit</th>
              <th>Action-view</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td><button className="btn btn-danger" onClick={() => removeItem(user.id)}>del</button></td>
                <td><button className="btn btn-warning" onClick={() => showUser(user.id)}>Edit</button></td>
                <td><button className="btn btn-success" onClick={() => showUser(user.id)}>view</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
