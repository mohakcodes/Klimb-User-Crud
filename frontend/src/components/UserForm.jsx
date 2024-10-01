import React from 'react';

const UserForm = ({ formData, setFormData, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="mb-8 p-6 border rounded-lg bg-white">
      <div className="text-md text-black mb-4">
        All fields are mandatory <span className="text-red-500">*</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold text-black">FIRST NAME <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="First Name"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        
        <div>
          <label className="font-semibold text-black">LAST NAME <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Last Name"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">PHONE <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Phone Number"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">EMAIL ID <span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Email Id"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">ROLE <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Role"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">DEPARTMENT <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Department"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.department}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            required
          />
        </div>

        <div>
          <label className="font-semibold text-black">LOCATION <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Location"
            className="border bg-slate-100 border-gray-300 p-2 rounded-lg w-full"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
        </div>
      </div>
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default UserForm;