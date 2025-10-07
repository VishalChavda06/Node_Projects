import React, { useState } from 'react';
import { MagnifyingGlassIcon, PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState([
    {
      id: 1,
      name: 'MacBook Pro 16"',
      category: 'Laptops',
      price: 2499,
      stock: 15,
      status: 'Active',
      image: 'https://via.placeholder.com/60x60?text=MBP'
    },
    {
      id: 2,
      name: 'iPhone 15 Pro',
      category: 'Phones',
      price: 999,
      stock: 32,
      status: 'Active',
      image: 'https://via.placeholder.com/60x60?text=IP15'
    },
    {
      id: 3,
      name: 'Samsung Galaxy S24',
      category: 'Phones',
      price: 799,
      stock: 0,
      status: 'Out of Stock',
      image: 'https://via.placeholder.com/60x60?text=S24'
    },
    {
      id: 4,
      name: 'iPad Air',
      category: 'Tablets',
      price: 599,
      stock: 8,
      status: 'Active',
      image: 'https://via.placeholder.com/60x60?text=IPAD'
    },
    {
      id: 5,
      name: 'AirPods Pro',
      category: 'Accessories',
      price: 249,
      stock: 45,
      status: 'Active',
      image: 'https://via.placeholder.com/60x60?text=APP'
    },
    {
      id: 6,
      name: 'Dell XPS 13',
      category: 'Laptops',
      price: 1299,
      stock: 12,
      status: 'Active',
      image: 'https://via.placeholder.com/60x60?text=Dell'
    }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="sm:flex sm:items-center mb-6">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="mt-2 text-sm text-gray-700">
            Manage your product inventory and catalog
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 sm:w-auto"
          >
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Product
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <select className="border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
            <option>All Categories</option>
            <option>Laptops</option>
            <option>Phones</option>
            <option>Tablets</option>
            <option>Accessories</option>
          </select>
          <select className="border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
            <option>All Status</option>
            <option>Active</option>
            <option>Out of Stock</option>
            <option>Inactive</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-16 w-16 rounded-lg object-cover"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      product.status === 'Active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    Stock: {product.stock} units
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <EyeIcon className="h-4 w-4" />
                </button>
                <button className="text-primary-600 hover:text-primary-900">
                  <PencilIcon className="h-4 w-4" />
                </button>
                <button className="text-red-600 hover:text-red-900">
                  <TrashIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No products found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
