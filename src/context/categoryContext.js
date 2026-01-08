'use client';

import { createContext, useContext, useState, useMemo, useCallback } from 'react';
import { CATEFORIES } from '../constants/audition/category';

const CategoryContext = createContext();

export function CategoryProvider({ children }) {
  const [category, setCategory] = useState(CATEFORIES.FANIDOL);
  
  const handleSetCategory = useCallback((newCategory) => {
    setCategory(newCategory);
  }, []);
  
  const contextValue = useMemo(() => ({
    category,
    setCategory: handleSetCategory
  }), [category, handleSetCategory]);

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
}

export function useCategoryContext() {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategoryContext must be used within a CategoryProvider');
  }
  return context;
}