# 📦 Shopping List App - Complete Dependencies List

## 🎯 Overview

This document lists **ALL dependencies** used in the Shopping List App, including both the original Expo template dependencies and the newly installed Redux packages.

---

## ✨ Newly Installed Dependencies (4 packages)

These packages were installed specifically for this project:

### 1. **@reduxjs/toolkit** `^2.11.0`
**Purpose:** Modern Redux state management  
**What it does:**
- Simplifies Redux setup with `configureStore`
- Provides `createSlice` for actions and reducers
- Includes Redux DevTools integration
- Reduces boilerplate code
- Built-in Immer for immutable updates

**Used in:**
- `store/index.ts` - Store configuration
- `store/slices/shoppingListSlice.ts` - State slice

**Installation:**
```bash
npm install @reduxjs/toolkit
```

---

### 2. **react-redux** `^9.2.0`
**Purpose:** React bindings for Redux  
**What it does:**
- Provides `Provider` component to wrap app
- Provides `useDispatch` hook for dispatching actions
- Provides `useSelector` hook for reading state
- Connects React components to Redux store

**Used in:**
- `app/_layout.tsx` - Provider wrapper
- `store/hooks.ts` - Custom typed hooks
- `app/(tabs)/index.tsx` - Component connections

**Installation:**
```bash
npm install react-redux
```

---

### 3. **@react-native-async-storage/async-storage** `^2.2.0`
**Purpose:** Local storage for React Native  
**What it does:**
- Stores data locally on device
- Persists data between app sessions
- Key-value storage system
- Works on iOS, Android, and Web

**Used in:**
- `store/index.ts` - Storage engine for Redux Persist
- Automatically saves Redux state

**Installation:**
```bash
npm install @react-native-async-storage/async-storage
```

---

### 4. **redux-persist** `^6.0.0`
**Purpose:** Persist Redux state to storage  
**What it does:**
- Automatically saves Redux state
- Loads state on app startup
- Handles rehydration process
- Configurable persistence rules

**Used in:**
- `store/index.ts` - Persist configuration
- `app/_layout.tsx` - PersistGate component

**Installation:**
```bash
npm install redux-persist
```

---

## 📚 Original Expo Template Dependencies

These were already included in the Expo template:

### Core React & React Native

#### **react** `19.1.0`
- Core React library
- Component system, hooks, context

#### **react-dom** `19.1.0`
- React renderer for web
- Used when running on web platform

#### **react-native** `0.81.5`
- React Native framework
- Core mobile components
- Platform APIs

#### **react-native-web** `~0.21.0`
- React Native for web browsers
- Enables web platform support

---

### Expo Packages

#### **expo** `~54.0.25`
- Core Expo SDK
- Development tools
- Build system

#### **expo-router** `~6.0.15`
- File-based routing system
- Navigation framework
- Used in: `app/` directory structure

#### **expo-constants** `~18.0.10`
- Access to system constants
- App configuration values

#### **expo-font** `~14.0.9`
- Custom font loading
- Font management

#### **expo-haptics** `~15.0.7`
- Haptic feedback (vibration)
- Used in: `components/haptic-tab.tsx`

#### **expo-image** `~3.0.10`
- Optimized image component
- Better performance than default Image

#### **expo-linking** `~8.0.9`
- Deep linking support
- URL handling

#### **expo-splash-screen** `~31.0.11`
- Splash screen management
- Loading screen configuration

#### **expo-status-bar** `~3.0.8`
- Status bar styling
- Platform-specific status bar control

#### **expo-symbols** `~1.0.7`
- SF Symbols support (iOS)
- Icon system

#### **expo-system-ui** `~6.0.8`
- System UI customization
- Navigation bar styling

#### **expo-web-browser** `~15.0.9`
- In-app browser
- Open external links

---

### React Navigation

#### **@react-navigation/native** `^7.1.8`
- Core navigation library
- Navigation context

#### **@react-navigation/bottom-tabs** `^7.4.0`
- Bottom tab navigator
- Used in: `app/(tabs)/_layout.tsx`

#### **@react-navigation/elements** `^2.6.3`
- Navigation UI elements
- Header components

---

### React Native Supporting Libraries

#### **react-native-gesture-handler** `~2.28.0`
- Touch gesture system
- Required for navigation

#### **react-native-reanimated** `~4.1.1`
- Animation library
- Smooth animations

#### **react-native-safe-area-context** `~5.6.0`
- Safe area management
- Notch and bottom bar handling

#### **react-native-screens** `~4.16.0`
- Native screen optimization
- Better navigation performance

#### **react-native-worklets** `0.5.1`
- JavaScript worklets for animations
- Required by reanimated

---

### UI Components & Icons

#### **@expo/vector-icons** `^15.0.3`
- Icon library (Ionicons, MaterialIcons, etc.)
- Used extensively throughout app

---

### Development Dependencies

#### **@types/react** `~19.1.0`
- TypeScript type definitions for React
- Development-time types

#### **typescript** `~5.9.2`
- TypeScript compiler
- Type checking

#### **eslint** `^9.25.0`
- JavaScript/TypeScript linter
- Code quality tool

#### **eslint-config-expo** `~10.0.0`
- Expo-specific ESLint rules
- Recommended code style

---

## 📊 Complete Package.json

```json
{
  "name": "shopping-list-app",
  "main": "expo-router/entry",
  "version": "1.0.0",
  "scripts": {
    "start": "expo start",
    "reset-project": "node ./scripts/reset-project.js",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "expo lint"
  },
  "dependencies": {
    "@expo/vector-icons": "^15.0.3",
    "@react-native-async-storage/async-storage": "^2.2.0",    // ✨ NEW
    "@react-navigation/bottom-tabs": "^7.4.0",
    "@react-navigation/elements": "^2.6.3",
    "@react-navigation/native": "^7.1.8",
    "@reduxjs/toolkit": "^2.11.0",                            // ✨ NEW
    "expo": "~54.0.25",
    "expo-constants": "~18.0.10",
    "expo-font": "~14.0.9",
    "expo-haptics": "~15.0.7",
    "expo-image": "~3.0.10",
    "expo-linking": "~8.0.9",
    "expo-router": "~6.0.15",
    "expo-splash-screen": "~31.0.11",
    "expo-status-bar": "~3.0.8",
    "expo-symbols": "~1.0.7",
    "expo-system-ui": "~6.0.8",
    "expo-web-browser": "~15.0.9",
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "react-native": "0.81.5",
    "react-native-gesture-handler": "~2.28.0",
    "react-native-reanimated": "~4.1.1",
    "react-native-safe-area-context": "~5.6.0",
    "react-native-screens": "~4.16.0",
    "react-native-web": "~0.21.0",
    "react-native-worklets": "0.5.1",
    "react-redux": "^9.2.0",                                  // ✨ NEW
    "redux-persist": "^6.0.0"                                 // ✨ NEW
  },
  "devDependencies": {
    "@types/react": "~19.1.0",
    "eslint": "^9.25.0",
    "eslint-config-expo": "~10.0.0",
    "typescript": "~5.9.2"
  },
  "private": true
}
```

---

## 🔍 Dependencies by Category

### State Management (4 packages)
- `@reduxjs/toolkit` - Redux state management
- `react-redux` - React bindings for Redux
- `redux-persist` - State persistence
- `@react-native-async-storage/async-storage` - Storage engine

### Core Framework (4 packages)
- `react` - React library
- `react-dom` - React for web
- `react-native` - React Native framework
- `react-native-web` - React Native for web

### Expo SDK (11 packages)
- `expo` - Core SDK
- `expo-router` - Routing
- `expo-constants` - Constants
- `expo-font` - Fonts
- `expo-haptics` - Haptics
- `expo-image` - Images
- `expo-linking` - Linking
- `expo-splash-screen` - Splash
- `expo-status-bar` - Status bar
- `expo-symbols` - Symbols
- `expo-system-ui` - System UI
- `expo-web-browser` - Browser

### Navigation (3 packages)
- `@react-navigation/native` - Core
- `@react-navigation/bottom-tabs` - Tabs
- `@react-navigation/elements` - Elements

### React Native Libraries (5 packages)
- `react-native-gesture-handler` - Gestures
- `react-native-reanimated` - Animations
- `react-native-safe-area-context` - Safe areas
- `react-native-screens` - Screens
- `react-native-worklets` - Worklets

### UI Components (1 package)
- `@expo/vector-icons` - Icons

### Development Tools (4 packages)
- `@types/react` - TypeScript types
- `typescript` - TypeScript compiler
- `eslint` - Linter
- `eslint-config-expo` - ESLint config

---

## 📥 Installation Commands

### Install All at Once
```bash
npm install
```

### Install New Dependencies Only
```bash
npm install @reduxjs/toolkit react-redux @react-native-async-storage/async-storage redux-persist
```

### Install Individual Packages
```bash
npm install @reduxjs/toolkit
npm install react-redux
npm install @react-native-async-storage/async-storage
npm install redux-persist
```

---

## 🎯 Dependency Usage Map

### Where Each New Dependency is Used

#### @reduxjs/toolkit
```typescript
// store/index.ts
import { configureStore } from '@reduxjs/toolkit';

// store/slices/shoppingListSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
```

#### react-redux
```typescript
// app/_layout.tsx
import { Provider } from 'react-redux';

// store/hooks.ts
import { useDispatch, useSelector } from 'react-redux';

// app/(tabs)/index.tsx
import { useAppDispatch, useAppSelector } from '@/store/hooks';
```

#### @react-native-async-storage/async-storage
```typescript
// store/index.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
```

#### redux-persist
```typescript
// store/index.ts
import { persistStore, persistReducer } from 'redux-persist';

// app/_layout.tsx
import { PersistGate } from 'redux-persist/integration/react';
```

---

## 🔄 Dependency Relationships

```
Shopping List App
├── React (UI Framework)
│   ├── React Native (Mobile/Web)
│   └── React DOM (Web)
│
├── Expo (Development Platform)
│   ├── expo-router (Navigation)
│   ├── expo-image (Images)
│   └── [other expo packages]
│
├── React Navigation (Tab Navigation)
│   ├── @react-navigation/native
│   └── @react-navigation/bottom-tabs
│
├── Redux (State Management) ✨ NEW
│   ├── @reduxjs/toolkit (Core)
│   ├── react-redux (React Integration)
│   ├── redux-persist (Persistence)
│   └── @react-native-async-storage/async-storage (Storage)
│
└── TypeScript (Type Safety)
    └── @types/react (Type Definitions)
```

---

## 📊 Dependency Statistics

| Category | Count | Percentage |
|----------|-------|------------|
| Total Dependencies | 32 | 100% |
| New Dependencies | 4 | 12.5% |
| Original Dependencies | 28 | 87.5% |
| Dev Dependencies | 4 | 12.5% |
| Production Dependencies | 28 | 87.5% |

---

## 🎓 Why Each New Dependency Was Chosen

### @reduxjs/toolkit
**Why:** Official, modern way to write Redux
- ✅ Less boilerplate than classic Redux
- ✅ Built-in best practices
- ✅ TypeScript support
- ✅ DevTools integration
- ✅ Simpler syntax

### react-redux
**Why:** Official React bindings for Redux
- ✅ Maintained by Redux team
- ✅ Optimized for React
- ✅ Hooks-based API
- ✅ TypeScript support
- ✅ Industry standard

### @react-native-async-storage/async-storage
**Why:** Official storage solution for React Native
- ✅ Works across iOS, Android, Web
- ✅ Persistent storage
- ✅ Simple key-value API
- ✅ Community standard
- ✅ Well-maintained

### redux-persist
**Why:** Best solution for Redux persistence
- ✅ Automatic state persistence
- ✅ Configurable
- ✅ Works with AsyncStorage
- ✅ Handles rehydration
- ✅ Most popular persistence library

---

## 🚀 Alternative Options (Not Used)

### Instead of Redux Toolkit + React-Redux
- ❌ Context API + useReducer (less scalable)
- ❌ MobX (different paradigm)
- ❌ Zustand (smaller ecosystem)
- ✅ Redux Toolkit (chosen - industry standard)

### Instead of Redux Persist
- ❌ Manual AsyncStorage calls (more code)
- ❌ SecureStore (overkill for shopping list)
- ✅ Redux Persist (chosen - automatic, reliable)

---

## 🛡️ Security & Maintenance

### All Dependencies Are:
- ✅ **Official packages** from trusted sources
- ✅ **Actively maintained** with regular updates
- ✅ **Well-documented** with extensive docs
- ✅ **TypeScript-first** with type definitions
- ✅ **Battle-tested** used by millions
- ✅ **Compatible** with React Native & Expo

### Update Strategy:
```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update to latest major versions
npm install @reduxjs/toolkit@latest react-redux@latest
```

---

## 📝 License Information

All dependencies used in this project are open-source:

| Package | License |
|---------|---------|
| @reduxjs/toolkit | MIT |
| react-redux | MIT |
| @react-native-async-storage/async-storage | MIT |
| redux-persist | MIT |
| react | MIT |
| react-native | MIT |
| expo | MIT |

---

## ✅ Verification

To verify all dependencies are installed:

```bash
# Check if packages are installed
npm list @reduxjs/toolkit
npm list react-redux
npm list @react-native-async-storage/async-storage
npm list redux-persist

# Verify no missing dependencies
npm install --check

# Check for vulnerabilities
npm audit
```

---

## 🎉 Summary

**Total Dependencies:** 32 packages  
**New Dependencies:** 4 packages (Redux ecosystem)  
**All Installed:** ✅ Yes  
**All Compatible:** ✅ Yes  
**Ready to Use:** ✅ Yes  

Your Shopping List App has all the dependencies it needs to run perfectly! 🚀

---

*Dependencies documentation for React Native Task 4 - December 2, 2025*
