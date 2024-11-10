import React, { useState } from 'react';
import axios from 'axios';
import './UserForm.css';
import { useNavigate, useParams } from 'react-router-dom'; // Import custom CSS

const UserForm = () => {

  const navigate=useNavigate();

  const generateRandomUserId = () => {
    return Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999
  };

  const [formData, setFormData] = useState({
    userId:generateRandomUserId(),
    userName: '',
    email: '',
    password: '',
    phoneNo: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password') {
      validatePassword(value);
    }

  };

  const validatePassword = (password) => {
    const passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/; 
    if (!passwordCriteria.test(password)) {
      setPasswordError('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {

    if (passwordError) {
      alert('Please fix the password issues before submitting.');
      return;
    }

    console.log(formData);
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:8999/userform`,formData);

      if (response.status === 200) {
        console.log('Success:', response.data);
        // Handle success (e.g., display a success message, clear form, etc.)
      } else {
        console.error('Error:', response.statusText);
        // Handle error (e.g., display error message)
      }
    } catch (error) {
      console.error('Request failed:', error.message);
      // Handle error (e.g., display error message)
    }
    navigate('/'); // Navigate to the form (AddUser) page
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
                    readOnly
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
                  {passwordError && (
                    <small className="text-danger">
                      {passwordError}
                    </small>
                  )}
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
export default UserForm;
