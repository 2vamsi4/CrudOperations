import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './UserForm.css';
import { useNavigate, useParams,useLocation } from 'react-router-dom'; // Import custom CSS

const EditForm = () => {

  const navigate=useNavigate();

  const location=useLocation();

  const { userId } = location.state || {};

  const [formData, setFormData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:8999/editUser/${userId}`)
      .then(response => {
        console.log(response);
        setFormData(response.data);
        console.log(formData);
      })
      .catch(error => {
      });
  }, [userId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use axios.put to send a PUT request to update the user data
    axios.put('http://localhost:8999/edit', formData)
      .then((response) => {
        console.log('User updated successfully:', response.data);
        navigate('/'); // Navigate to another page on success
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Register</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="userId">UserId</label>
                  <input
                    type="number"
                    className="form-control"
                    id="userId"
                    name="userId"
                    value={formData.userId}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNo"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EditForm;
