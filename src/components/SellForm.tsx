import React, { useState } from 'react';
import { Item, Customer } from '../App';

interface SellFormProps {
  items: Item[];
  customers: Customer[];
  onSell: (itemId: number, quantity: number, customerId: number) => void;
}

const SellForm: React.FC<SellFormProps> = ({ items, customers, onSell }) => {
  const [itemId, setItemId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [customerId, setCustomerId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (itemId && quantity && customerId) {
      onSell(Number(itemId), Number(quantity), Number(customerId));
      setItemId('');
      setQuantity('');
      setCustomerId('');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Sell Item</h2>
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
              <option key={item.id} value={item.id}>{item.name} (In stock: {item.quantity})</option>
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
            max={items.find(item => item.id === Number(itemId))?.quantity || 0}
          />
        </div>
        <div>
          <label htmlFor="customer" className="block mb-1">Customer:</label>
          <select
            id="customer"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>{customer.name}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Sell Item
        </button>
      </form>
    </div>
  );
};

export default SellForm;