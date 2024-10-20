import React, { useState } from 'react';
import { Item } from '../App';

interface BuyFormProps {
  items: Item[];
  onBuy: (itemId: number, quantity: number) => void;
}

const BuyForm: React.FC<BuyFormProps> = ({ items, onBuy }) => {
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemId && quantity) {
      onBuy(Number(itemId), Number(quantity));
      setItemId('');
      setQuantity('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Buy Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="item" className="block mb-1">Item:</label>
          <select
            id="item"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select an item</option>
            {items.map((item) => (
              <option key={item.id} value={item.id}>{item.name} (Current stock: {item.quantity})</option>
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
            min="1"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Buy Item
        </button>
      </form>
    </div>
  );
};

export default BuyForm;