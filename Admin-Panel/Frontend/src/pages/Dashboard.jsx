import React from 'react';
import {
  UsersIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const stats = [
    {
      name: 'Total Users',
      value: '2,345',
      change: '+12%',
      changeType: 'positive',
      icon: UsersIcon,
    },
    {
      name: 'Total Products',
      value: '1,234',
      change: '+8%',
      changeType: 'positive',
      icon: ShoppingBagIcon,
    },
    {
      name: 'Total Orders',
      value: '567',
      change: '+23%',
      changeType: 'positive',
      icon: ClipboardDocumentListIcon,
    },
    {
      name: 'Revenue',
      value: '$45,678',
      change: '+15%',
      changeType: 'positive',
      icon: CurrencyDollarIcon,
    },
  ];

  const recentOrders = [
    { id: 1, customer: 'John Doe', product: 'Laptop', amount: '$1,299', status: 'Completed' },
    { id: 2, customer: 'Jane Smith', product: 'Phone', amount: '$699', status: 'Pending' },
    { id: 3, customer: 'Bob Johnson', product: 'Tablet', amount: '$399', status: 'Shipped' },
    { id: 4, customer: 'Alice Brown', product: 'Headphones', amount: '$199', status: 'Completed' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-6 w-6 text-gray-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Orders</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Latest orders from your customers
          </p>
        </div>
        <ul className="divide-y divide-gray-200">
          {recentOrders.map((order) => (
            <li key={order.id}>
              <div className="px-4 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-primary-600">
                        {order.customer.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                    <div className="text-sm text-gray-500">{order.product}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-sm font-medium text-gray-900 mr-4">{order.amount}</div>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    order.status === 'Completed' 
                      ? 'bg-green-100 text-green-800'
                      : order.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
