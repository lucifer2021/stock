import React from 'react';
import { Item } from '../App';

interface InventoryListProps {
  items: Item[];
}

const InventoryList: React.FC<InventoryListProps> = ({ items }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
      {items.length === 0 ? (
        <p>No items in inventory. Add some items to get started!</p>
      ) : (
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.category}</td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InventoryList;