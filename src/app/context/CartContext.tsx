'use client'
import React, { createContext, useState, ReactNode, useContext } from "react";

type CartContextType = {
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  itemsCount: number;
  setItemsCount: React.Dispatch<React.SetStateAction<number>>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <CartContext.Provider value={{ totalPrice, setTotalPrice, itemsCount, setItemsCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
