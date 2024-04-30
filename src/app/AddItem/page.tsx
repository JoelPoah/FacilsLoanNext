"use client";
import { useState } from 'react';
import {addItem} from '@/src/app/_actions/actions'

const CreateItem = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {

    addItem(name,category,description)
    e.preventDefault();
    // Here you can perform actions like sending the form data to an API
    console.log({ name, category, description });
    // Clear the form fields after submission
    setName('');
    setCategory('');
    setDescription('');
  };

  return (
    <div className="container mx-auto p-4 bg-gray-900 ">
      <h1 className="text-3xl font-bold mb-4 max-w-md mx-auto">Create New Item</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category:</label>
          <input
            type="text"
            id="category"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description:</label>
          <textarea
            id="description"
            className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItem;
