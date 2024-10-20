import React, { useState } from 'react';
import { Category } from '../App';

interface AddItemFormProps {
  onAddItem: (item: { name: string; quantity: number; price: number; category: string }) => void;
  categories: Category[];
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem, categories }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && quantity && price && category) {
      onAddItem({
        name,
        quantity: parseInt(quantity, 10),
        price: parseFloat(price),
        category,
      });
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block mb-1">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-1">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-2 border rounded"
            required
            min="0"
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
            min="0"
            step="0.01"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add Item
        </button>
      </form>
    </div>
  );
};

export default AddItemForm;