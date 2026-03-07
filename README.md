# Shopping List App - Complete Documentation

## Live APK
[Download APK from Google Drive](https://drive.google.com/file/d/1BHAJ4zUjCUSnuXjdK7OYin-Jay134OlY/view?usp=sharing)

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technical Requirements](#technical-requirements)
- [Installation & Setup](#installation--setup)
- [File Structure](#file-structure)
- [Redux Implementation](#redux-implementation)
- [Component Documentation](#component-documentation)
- [Testing Guide](#testing-guide)
- [Accessibility Features](#accessibility-features)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

The Shopping List App is a full-featured React Native application built with Expo, Redux Toolkit, and TypeScript. It allows users to manage their shopping lists efficiently with features like adding, editing, deleting items, marking items as purchased, and viewing shopping statistics. All data is persisted locally using AsyncStorage.

## ✨ Features

### Core Features
- ✅ **Add Items**: Add new items with custom names and quantities
- ✅ **Edit Items**: Edit existing items inline with validation
- ✅ **Delete Items**: Delete individual items with confirmation dialogs
- ✅ **Mark as Purchased**: Toggle items as purchased with checkboxes
- ✅ **Statistics**: View total, purchased, remaining items, and completion percentage
- ✅ **Bulk Actions**: Delete all purchased items or clear entire list
- ✅ **Data Persistence**: All data persists across app sessions using AsyncStorage
- ✅ **Dark/Light Mode**: Full theme support with automatic system detection
- ✅ **User Feedback**: Success messages and error validation
- ✅ **Accessibility**: Full screen reader support and ARIA attributes

## 🔧 Technical Requirements

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development) or Android Emulator (for Android development)

### Dependencies
```json
{
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "^1.23.1",
    "@reduxjs/toolkit": "^2.2.1",
    "expo": "~54.0.25",
    "expo-router": "~6.0.15",
    "react": "19.1.0",
    "react-native": "0.81.5",
    "react-redux": "^9.1.0",
    "redux-persist": "^6.0.0"
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "typescript": "~5.9.2"
  }
}
```

## 🚀 Installation & Setup

### Step 1: Clone or Navigate to Project Directory
```bash
cd Shopping-List-App
```

### Step 2: Install Dependencies
```bash
npm install
```

The following packages are already installed:
- `@reduxjs/toolkit` - Redux state management
- `react-redux` - React bindings for Redux
- `@react-native-async-storage/async-storage` - Local storage
- `redux-persist` - Redux state persistence

### Step 3: Start the Development Server
```bash
npm start
```

### Step 4: Run on Platform
- **iOS**: Press `i` or run `npm run ios`
- **Android**: Press `a` or run `npm run android`
- **Web**: Press `w` or run `npm run web`

## 📁 File Structure

```
shopping-list-app/
│
├── app/
│   ├── _layout.tsx                 # Root layout with Redux Provider
│   ├── modal.tsx                   # Modal screen (optional)
│   └── (tabs)/
│       ├── _layout.tsx             # Tab navigation layout
│       ├── index.tsx               # Main shopping list screen
│       └── explore.tsx             # About/documentation screen
│
├── store/
│   ├── index.ts                    # Redux store configuration
│   ├── hooks.ts                    # Custom Redux hooks (useAppDispatch, useAppSelector)
│   └── slices/
│       └── shoppingListSlice.ts    # Shopping list slice with actions and reducers
│
├── components/
│   ├── shopping/
│   │   ├── AddEditItemForm.tsx     # Form for adding/editing items
│   │   ├── ShoppingListItem.tsx    # Individual list item component
│   │   ├── EmptyState.tsx          # Empty list placeholder
│   │   └── StatisticsBar.tsx       # Statistics display component
│   │
│   ├── ui/                         # UI components (collapsible, icons, etc.)
│   ├── themed-text.tsx             # Themed text component
│   └── themed-view.tsx             # Themed view component
│
├── hooks/
│   ├── use-color-scheme.ts         # Color scheme detection hook
│   └── use-theme-color.ts          # Theme color hook
│
├── constants/
│   └── theme.ts                    # Theme constants
│
├── assets/
│   └── images/                     # App images and icons
│
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── app.json                        # Expo configuration
└── README.md                       # Project readme

```

## 🔄 Redux Implementation

### Store Configuration (`store/index.ts`)
The Redux store is configured with Redux Persist to save state to AsyncStorage:

```typescript
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import shoppingListReducer from './slices/shoppingListSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['shoppingList'],
};

const persistedReducer = persistReducer(persistConfig, shoppingListReducer);

export const store = configureStore({
  reducer: {
    shoppingList: persistedReducer,
  },
});

export const persistor = persistStore(store);
```

### Shopping List Slice (`store/slices/shoppingListSlice.ts`)

**State Structure:**
```typescript
interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
  createdAt: number;
}

interface ShoppingListState {
  items: ShoppingItem[];
  editingItemId: string | null;
}
```

**Actions:**
- `addItem(name, quantity)` - Add a new item to the list
- `editItem(id, name, quantity)` - Edit an existing item
- `deleteItem(id)` - Delete an item from the list
- `togglePurchased(id)` - Toggle purchased status
- `setEditingItem(id)` - Set which item is being edited
- `clearAllItems()` - Clear entire shopping list
- `deletePurchasedItems()` - Delete all purchased items

**Example Usage:**
```typescript
import { useAppDispatch } from '@/store/hooks';
import { addItem } from '@/store/slices/shoppingListSlice';

const dispatch = useAppDispatch();
dispatch(addItem({ name: 'Milk', quantity: 2 }));
```

## 🧩 Component Documentation

### 1. ShoppingListItem Component
**Location:** `components/shopping/ShoppingListItem.tsx`

**Purpose:** Displays a single shopping item with checkbox, name, quantity, and action buttons.

**Props:**
```typescript
interface ShoppingListItemProps {
  item: ShoppingItem;
  onTogglePurchased: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}
```

**Features:**
- Checkbox for marking items as purchased
- Displays item name and quantity
- Edit and delete action buttons
- Visual feedback for purchased items (strikethrough, reduced opacity)
- Dark/light mode support
- Accessibility labels and roles

### 2. AddEditItemForm Component
**Location:** `components/shopping/AddEditItemForm.tsx`

**Purpose:** Form for adding new items or editing existing ones with validation.

**Props:**
```typescript
interface AddEditItemFormProps {
  onSubmit: (name: string, quantity: number) => void;
  onCancel?: () => void;
  editingItem?: ShoppingItem | null;
  isEditing?: boolean;
}
```

**Features:**
- Text input for item name (max 50 characters)
- Numeric input with +/- buttons for quantity
- Input validation with error messages
- Different UI for add vs edit mode
- Keyboard-aware layout
- Accessibility support

**Validation Rules:**
- Name: Required, minimum 2 characters
- Quantity: Must be a number between 1 and 9999

### 3. StatisticsBar Component
**Location:** `components/shopping/StatisticsBar.tsx`

**Purpose:** Displays shopping list statistics.

**Props:**
```typescript
interface StatisticsBarProps {
  totalItems: number;
  purchasedItems: number;
}
```

**Displays:**
- Total items count
- Purchased items count (green)
- Remaining items count (orange)
- Completion percentage

### 4. EmptyState Component
**Location:** `components/shopping/EmptyState.tsx`

**Purpose:** Friendly placeholder when the list is empty.

**Features:**
- Cart icon
- Encouraging message
- Theme-aware styling

## 🧪 Testing Guide

### Manual Testing Checklist

#### Add Item Functionality
- [ ] Can add item with valid name and quantity
- [ ] Cannot add item with empty name
- [ ] Cannot add item with name less than 2 characters
- [ ] Cannot add item with invalid quantity
- [ ] Success message appears after adding
- [ ] New item appears at top of list

#### Edit Item Functionality
- [ ] Clicking edit button loads item into form
- [ ] Form shows "Edit Item" title
- [ ] Can modify name and quantity
- [ ] Changes are saved correctly
- [ ] Can cancel editing
- [ ] Success message appears after editing

#### Delete Item Functionality
- [ ] Clicking delete shows confirmation dialog
- [ ] Can cancel deletion
- [ ] Item is removed after confirmation
- [ ] Success message appears after deletion

#### Toggle Purchased
- [ ] Clicking checkbox toggles purchased status
- [ ] Purchased items show strikethrough text
- [ ] Purchased items have reduced opacity
- [ ] Statistics update correctly

#### Bulk Actions
- [ ] "Delete Purchased" removes all purchased items
- [ ] "Clear All" removes all items
- [ ] Confirmation dialogs appear for bulk actions
- [ ] Appropriate messages for empty states

#### Persistence
- [ ] Items persist after closing and reopening app
- [ ] Purchased status persists
- [ ] Statistics remain accurate after reload

#### UI/UX
- [ ] Dark mode works correctly
- [ ] Light mode works correctly
- [ ] All buttons provide visual feedback
- [ ] Error messages display correctly
- [ ] Success messages display correctly

#### Accessibility
- [ ] Screen reader can navigate all elements
- [ ] All buttons have accessibility labels
- [ ] Form inputs have proper labels
- [ ] Accessibility hints are helpful

### Integration Testing

To test Redux actions and reducers, create test files:

```typescript
// Example test for shoppingListSlice
import { store } from '@/store';
import { addItem, deleteItem } from '@/store/slices/shoppingListSlice';

// Test adding item
store.dispatch(addItem({ name: 'Test Item', quantity: 1 }));
const state = store.getState();
console.log('Items:', state.shoppingList.items);

// Test deleting item
const itemId = state.shoppingList.items[0].id;
store.dispatch(deleteItem(itemId));
console.log('Items after delete:', store.getState().shoppingList.items);
```

## ♿ Accessibility Features

### Implemented Features
1. **Accessibility Labels**: All interactive elements have descriptive labels
2. **Accessibility Roles**: Proper roles assigned (button, checkbox, etc.)
3. **Accessibility States**: Checkbox states are announced
4. **Accessibility Hints**: Helpful hints for complex actions
5. **Color Contrast**: High contrast in both themes
6. **Font Scaling**: Respects system font size settings
7. **Screen Reader Support**: Fully navigable with VoiceOver/TalkBack

### Testing Accessibility
- **iOS**: Enable VoiceOver in Settings > Accessibility
- **Android**: Enable TalkBack in Settings > Accessibility

## 🐛 Troubleshooting

### Common Issues

**Issue: App won't start**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npx expo start --clear
```

**Issue: Redux Persist not working**
- Check AsyncStorage is properly installed
- Verify persistor is passed to PersistGate
- Clear app data and restart

**Issue: TypeScript errors**
```bash
# Rebuild TypeScript
npx tsc --noEmit
```

**Issue: Items not persisting**
- Check AsyncStorage permissions
- Verify Redux Persist configuration
- Check for errors in console

**Issue: Dark mode not switching**
- Check device system settings
- Verify useColorScheme hook is working
- Restart app after changing system theme

### Debug Mode
To enable Redux DevTools (web only):
```typescript
// In store/index.ts
export const store = configureStore({
  reducer: {
    shoppingList: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
```

## 📱 Running on Different Platforms

### iOS
```bash
npm run ios
# or
npx expo run:ios
```

### Android
```bash
npm run android
# or
npx expo run:android
```

### Web
```bash
npm run web
```

## 🎨 Customization

### Changing Colors
Edit `constants/theme.ts` to customize app colors:
```typescript
export const Colors = {
  light: {
    tint: '#4CAF50',  // Primary color
    // ... other colors
  },
  dark: {
    tint: '#4CAF50',
    // ... other colors
  },
};
```

### Changing App Name
Edit `app.json`:
```json
{
  "expo": {
    "name": "Your App Name",
    "slug": "your-app-slug"
  }
}
```
