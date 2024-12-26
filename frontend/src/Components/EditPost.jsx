import React from "react";

function EditPost() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Edit Post</h1>

        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post title"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="description"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            placeholder="Enter post description"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-700">
            Save Changes
          </button>
          <button className="bg-gray-300 text-gray-700 text-sm font-medium py-2 px-4 rounded-md hover:bg-gray-400">
            Cancel Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPost;
