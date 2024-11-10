import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Display.css';
import { useNavigate } from 'react-router-dom';

const TableComponent = () => {

    const [user,setUser]=useState([]);

    useEffect(() => {
        // Fetch data from the API when the component is mounted
        axios.get('http://localhost:8999/userform')
          .then((response) => {
            setUser(response.data);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
          });
      }, []);
      
  const navigate=useNavigate();

   const addUser = () => {
     navigate('/add-user'); // Navigate to the form (AddUser) page
   };

  const handleSubmit = (userId) => {
    navigate('/edit', { state: { userId } }); // Navigate to the form (AddUser) page
  };

  const deleteRow=(userId)=>{

    const response=axios.delete(`http://localhost:8999/delete/${userId}`);

    setUser(user => user.filter(user => user.userId !== userId));

  }


  return (
    <div className="container">
      <h2 className="mt-4 mb-3">Users Data</h2>
      <table className="table table-bordered table-hover custom-table">
        <thead className="thead-dark">
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Phone No</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr key={index}>
              <td>{item.userId}</td>
              <td>{item.userName}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.phoneNo}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteRow(item.userId)}
                >
                  Delete
                </button>
              </td>
              <td>
              <button
                   className="btn btn-primary btn-sm"
                   onClick={() => handleSubmit(item.userId)}
              >
               Edit
              </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
            className="btn btn-primary btn-sm mt-3"
            onClick={addUser}
      >
      Add User
      </button>
    </div>
  );
};

export default TableComponent;
