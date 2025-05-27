import React, { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import AddButton from '../components/AddButton';

function Users() {
  const [users, setUsers] = useState([]);
  const breadcrumb = ['User', ' / ', 'User List'];

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error('Failed to fetch users:', err));
  }, []);

  return (
    <div className="p-6">
      <PageHeader
        title="Users"
        breadscrumb={breadcrumb}
        children={<AddButton name="add-user" label="Add User" />}
      />

      <div className="border rounded-md shadow mt-6 overflow-auto max-h-[600px]">
        <table className="min-w-[900px] w-full table-fixed border-collapse">
          <thead className="sticky top-0 z-10 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
            <tr>
              <th className="border border-black px-4 py-3 text-left">ID</th>
              <th className="border border-black px-4 py-3 text-left">Name</th>
              <th className="border border-black px-4 py-3 text-left">Email</th>
              <th className="border border-black px-4 py-3 text-left">Phone</th>
              <th className="border border-black px-4 py-3 text-left">Age</th>
              <th className="border border-black px-4 py-3 text-left">Gender</th>
              <th className="border border-black px-4 py-3 text-left">City</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-200 transition duration-200">
                <td className="border border-black px-4 py-2">{user.id}</td>
                <td className="border border-black px-4 py-2">{`${user.firstName} ${user.lastName}`}</td>
                <td className="border border-black px-4 py-2">{user.email}</td>
                <td className="border border-black px-4 py-2">{user.phone}</td>
                <td className="border border-black px-4 py-2">{user.age}</td>
                <td className="border border-black px-4 py-2 capitalize">{user.gender}</td>
                <td className="border border-black px-4 py-2">{user.address?.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
