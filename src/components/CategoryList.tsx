import React from 'react';
import { Category } from '../App';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      {categories.length === 0 ? (
        <p>No categories added yet. Add some categories to get started!</p>
      ) : (
        <ul className="list-disc list-inside">
          {categories.map((category) => (
            <li key={category.id} className="mb-2">{category.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CategoryList;