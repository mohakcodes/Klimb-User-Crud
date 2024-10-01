import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: '',
    department: '',
    location: ''
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user.id);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      email: user.email,
      role: user.role,
      department: user.department,
      location: user.location
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUsers = users.map(user =>
      user.id === editingUser ? { ...user, ...formData } : user
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditingUser(null);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      role: '',
      department: '',
      location: ''
    });
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
      <input
        type="text"
        placeholder="Search for email"
        className="border border-gray-300 p-2 rounded-lg mb-6 w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {editingUser && (
        <UserForm
          formData={formData} 
          setFormData={setFormData} 
          handleSubmit={handleSubmit}
        />
      )}

      <div className="overflow-x-auto">
        <table className="w-full bg-white border">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">Name</th>
              <th className="border-b px-4 py-2 text-left">Phone No.</th>
              <th className="border-b px-4 py-2 text-left">Role</th>
              <th className="border-b px-4 py-2 text-left">Department</th>
              <th className="border-b px-4 py-2 text-left">Location</th>
              <th className="border-b px-4 py-2 text-left">Email</th>
              <th className="border-b px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td className="border-b px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
                <td className="border-b px-4 py-2">{user.phone}</td>
                <td className="border-b px-4 py-2">{user.role}</td>
                <td className="border-b px-4 py-2">{user.department}</td>
                <td className="border-b px-4 py-2">{user.location}</td>
                <td className="border-b px-4 py-2">{user.email}</td>
                <td className="border-b px-4 py-2">
                  <button
                    className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleEditClick(user)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;