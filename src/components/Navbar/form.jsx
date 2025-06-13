import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#217373' }}>
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-base font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>

          {/* Phone/Mobile */}
          <div>
            <label htmlFor="phoneMobile" className="block text-base font-medium text-gray-700 mb-1">
              Phone/Mobile <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phoneMobile"
              name="phoneMobile"
              placeholder="Mobile Number"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base"
            />
          </div>

          {/* Choose Your Plan */}
          <div>
            <label htmlFor="choosePlan" className="block text-base font-medium text-gray-700 mb-1">
              Choose Your Plan <span className="text-red-500">*</span>
            </label>
            <select
              id="choosePlan"
              name="choosePlan"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base appearance-none cursor-pointer"
            >
              <option value="">- Select Plan-</option>
              {/* Add more options here if needed */}
              <option value="basic">Basic Plan</option>
              <option value="premium">Premium Plan</option>
              <option value="enterprise">Enterprise Plan</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            style={{ backgroundColor: '#47a19c' }} // Using direct style for precise color from the image
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;