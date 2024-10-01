import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    department: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (users.some(user => user.email === userData.email)) {
      alert('User already exists, use a different email id');
      return;
    }

    const newUser = {
      ...userData,
      id: Date.now(),
    };

    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);

    setUserData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: '',
      department: '',
      location: ''
    });
    
    navigate('/users');
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className='flex flex-row justify-between'>
        <div className="text-2xl font-bold mb-4">Add User</div>
      </div>
      <UserForm formData={userData} setFormData={setUserData} handleSubmit={handleSubmit} />
    </div>
  );
};

export default AddUser;