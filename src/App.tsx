import React, { useState } from 'react';
import { Package, PlusCircle, Home, Users, ShoppingCart, DollarSign, List } from 'lucide-react';
import InventoryList from './components/InventoryList';
import AddItemForm from './components/AddItemForm';
import CustomerList from './components/CustomerList';
import AddCustomerForm from './components/AddCustomerForm';
import SellForm from './components/SellForm';
import BuyForm from './components/BuyForm';
import CategoryList from './components/CategoryList';
import AddCategoryForm from './components/AddCategoryForm';

export interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
  category: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Category {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeTab, setActiveTab] = useState('inventory');

  const addItem = (newItem: Omit<Item, 'id'>) => {
    setItems([...items, { ...newItem, id: items.length + 1 }]);
  };

  const addCustomer = (newCustomer: Omit<Customer, 'id'>) => {
    setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
  };

  const addCategory = (newCategory: Omit<Category, 'id'>) => {
    setCategories([...categories, { ...newCategory, id: categories.length + 1 }]);
  };

  const sellItem = (itemId: number, quantity: number, customerId: number) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity - quantity } : item
    ));
  };

  const buyItem = (itemId: number, quantity: number) => {
    setItems(items.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Package className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">Inventory Manager</span>
              </div>
              <div className="ml-6 flex space-x-8">
                <button
                  onClick={() => setActiveTab('inventory')}
                  className={`${activeTab === 'inventory' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Home className="mr-1 h-5 w-5" />
                  Inventory
                </button>
                <button
                  onClick={() => setActiveTab('customers')}
                  className={`${activeTab === 'customers' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <Users className="mr-1 h-5 w-5" />
                  Customers
                </button>
                <button
                  onClick={() => setActiveTab('sell')}
                  className={`${activeTab === 'sell' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <ShoppingCart className="mr-1 h-5 w-5" />
                  Sell
                </button>
                <button
                  onClick={() => setActiveTab('buy')}
                  className={`${activeTab === 'buy' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <DollarSign className="mr-1 h-5 w-5" />
                  Buy
                </button>
                <button
                  onClick={() => setActiveTab('categories')}
                  className={`${activeTab === 'categories' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  <List className="mr-1 h-5 w-5" />
                  Categories
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {activeTab === 'inventory' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <InventoryList items={items} />
            </div>
            <div>
              <AddItemForm onAddItem={addItem} categories={categories} />
            </div>
          </div>
        )}
        {activeTab === 'customers' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CustomerList customers={customers} />
            </div>
            <div>
              <AddCustomerForm onAddCustomer={addCustomer} />
            </div>
          </div>
        )}
        {activeTab === 'sell' && (
          <SellForm items={items} customers={customers} onSell={sellItem} />
        )}
        {activeTab === 'buy' && (
          <BuyForm items={items} onBuy={buyItem} />
        )}
        {activeTab === 'categories' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CategoryList categories={categories} />
            </div>
            <div>
              <AddCategoryForm onAddCategory={addCategory} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;