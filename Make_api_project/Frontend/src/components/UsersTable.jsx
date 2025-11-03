import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_URL}/users`);
      if (response.data && response.data.data) {
        setUsers(response.data.data);
      } else {
        setError('Invalid response format');
      }
    } catch (err) {
      const errorMessage = err.response 
        ? `Failed to fetch users: ${err.response.status} ${err.response.statusText}`
        : err.message 
        ? `Failed to fetch users: ${err.message}`
        : 'Failed to fetch users. Make sure the backend server is running on port 3000.';
      setError(errorMessage);
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-[20px] p-8 shadow-lg min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl font-semibold text-gray-700 mb-4">Users API</div>
          <div className="text-purple-600 font-semibold">Loading users...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-[20px] p-8 shadow-lg">
        <div className="text-xl font-semibold text-gray-700 mb-4">Users API</div>
        <div className="text-red-600 bg-red-50 border-2 border-red-300 rounded-lg p-4 mb-4 text-center font-semibold">{error}</div>
        <button onClick={fetchUsers} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all hover:-translate-y-1">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[20px] p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 w-full">
      <div className="mb-6 pb-5 border-b-4 bg-gradient-to-r from-indigo-50 to-purple-50 -mx-8 -mt-8 px-8 pt-6 rounded-t-[20px]">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Users API
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase tracking-wide text-sm">ID</th>
              <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase tracking-wide text-sm">Name</th>
              <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase tracking-wide text-sm">Email</th>
              <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase tracking-wide text-sm">Age</th>
              <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase tracking-wide text-sm">City</th>
              <th className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 text-left font-semibold uppercase tracking-wide text-sm">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={`transition-colors hover:bg-indigo-50 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                <td className="p-4 border-b border-gray-200 text-gray-800">{user.id}</td>
                <td className="p-4 border-b border-gray-200 text-gray-800">{user.name}</td>
                <td className="p-4 border-b border-gray-200 text-gray-800">{user.email}</td>
                <td className="p-4 border-b border-gray-200 text-gray-800">{user.age}</td>
                <td className="p-4 border-b border-gray-200 text-gray-800">{user.city}</td>
                <td className="p-4 border-b border-gray-200 text-gray-800">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;

