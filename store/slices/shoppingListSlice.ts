/**
 * Shopping List Slice
 * This file contains the Redux slice for managing shopping list state
 * including actions and reducers for CRUD operations
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of a shopping item
export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
  createdAt: number;
}

// Define the state structure
interface ShoppingListState {
  items: ShoppingItem[];
  editingItemId: string | null;
}

// Initial state
const initialState: ShoppingListState = {
  items: [],
  editingItemId: null,
};

// Create the slice with reducers
const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    // Add a new item to the shopping list
    addItem: (state, action: PayloadAction<{ name: string; quantity: number }>) => {
      const newItem: ShoppingItem = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: action.payload.name,
        quantity: action.payload.quantity,
        purchased: false,
        createdAt: Date.now(),
      };
      state.items.unshift(newItem); // Add to the beginning of the list
    },

    // Edit an existing item
    editItem: (
      state,
      action: PayloadAction<{ id: string; name: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.name = action.payload.name;
        item.quantity = action.payload.quantity;
      }
      state.editingItemId = null;
    },

    // Delete an item from the list
    deleteItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Toggle the purchased status of an item
    togglePurchased: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.purchased = !item.purchased;
      }
    },

    // Set which item is currently being edited
    setEditingItem: (state, action: PayloadAction<string | null>) => {
      state.editingItemId = action.payload;
    },

    // Clear all items from the list
    clearAllItems: (state) => {
      state.items = [];
      state.editingItemId = null;
    },

    // Delete all purchased items
    deletePurchasedItems: (state) => {
      state.items = state.items.filter((item) => !item.purchased);
    },
  },
});

// Export actions
export const {
  addItem,
  editItem,
  deleteItem,
  togglePurchased,
  setEditingItem,
  clearAllItems,
  deletePurchasedItems,
} = shoppingListSlice.actions;

// Export reducer
export default shoppingListSlice.reducer;
