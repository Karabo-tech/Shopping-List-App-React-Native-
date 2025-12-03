/**
 * Shopping List Screen (Main Screen)
 * This is the main screen of the application where users can:
 * - View their shopping list
 * - Add new items
 * - Edit existing items
 * - Delete items
 * - Mark items as purchased
 * - View statistics
 */

import AddEditItemForm from '@/components/shopping/AddEditItemForm';
import EmptyState from '@/components/shopping/EmptyState';
import ShoppingListItem from '@/components/shopping/ShoppingListItem';
import StatisticsBar from '@/components/shopping/StatisticsBar';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addItem,
  clearAllItems,
  deleteItem,
  deletePurchasedItems,
  editItem,
  setEditingItem,
  togglePurchased,
} from '@/store/slices/shoppingListSlice';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ShoppingListScreen() {
  const dispatch = useAppDispatch();
  const { items, editingItemId } = useAppSelector((state) => state.shoppingList);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Calculate statistics
  const totalItems = items.length;
  const purchasedItems = items.filter((item) => item.purchased).length;

  // Get the item currently being edited
  const editingItem = items.find((item) => item.id === editingItemId);

  // Handle adding a new item
  const handleAddItem = useCallback(
    (name: string, quantity: number) => {
      dispatch(addItem({ name, quantity }));
      Alert.alert('Success', `${name} added to your shopping list!`, [
        { text: 'OK' },
      ]);
    },
    [dispatch]
  );

  // Handle editing an item
  const handleEditItem = useCallback(
    (name: string, quantity: number) => {
      if (editingItemId) {
        dispatch(editItem({ id: editingItemId, name, quantity }));
        Alert.alert('Success', 'Item updated successfully!', [{ text: 'OK' }]);
      }
    },
    [dispatch, editingItemId]
  );

  // Handle starting edit mode
  const handleStartEdit = useCallback(
    (id: string) => {
      dispatch(setEditingItem(id));
    },
    [dispatch]
  );

  // Handle canceling edit mode
  const handleCancelEdit = useCallback(() => {
    dispatch(setEditingItem(null));
  }, [dispatch]);

  // Handle deleting an item with confirmation
  const handleDeleteItem = useCallback(
    (id: string) => {
      const item = items.find((i) => i.id === id);
      Alert.alert(
        'Delete Item',
        `Are you sure you want to delete "${item?.name}"?`,
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
              dispatch(deleteItem(id));
              Alert.alert('Success', 'Item deleted successfully!', [
                { text: 'OK' },
              ]);
            },
          },
        ]
      );
    },
    [dispatch, items]
  );

  // Handle toggling purchased status
  const handleTogglePurchased = useCallback(
    (id: string) => {
      dispatch(togglePurchased(id));
    },
    [dispatch]
  );

  // Handle clearing all items
  const handleClearAll = useCallback(() => {
    if (items.length === 0) {
      Alert.alert('Info', 'Your shopping list is already empty!');
      return;
    }

    Alert.alert(
      'Clear All Items',
      'Are you sure you want to delete all items from your shopping list?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Clear All',
          style: 'destructive',
          onPress: () => {
            dispatch(clearAllItems());
            Alert.alert('Success', 'All items cleared!', [{ text: 'OK' }]);
          },
        },
      ]
    );
  }, [dispatch, items.length]);

  // Handle deleting purchased items
  const handleDeletePurchased = useCallback(() => {
    const purchasedCount = items.filter((item) => item.purchased).length;

    if (purchasedCount === 0) {
      Alert.alert('Info', 'No purchased items to delete!');
      return;
    }

    Alert.alert(
      'Delete Purchased Items',
      `Delete ${purchasedCount} purchased item${purchasedCount > 1 ? 's' : ''}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            dispatch(deletePurchasedItems());
            Alert.alert('Success', 'Purchased items deleted!', [
              { text: 'OK' },
            ]);
          },
        },
      ]
    );
  }, [dispatch, items]);

  return (
    <View
      style={[
        styles.container,
        isDark ? styles.containerDark : styles.containerLight,
      ]}
    >
      {/* Header */}
      <View
        style={[
          styles.header,
          isDark ? styles.headerDark : styles.headerLight,
        ]}
      >
        <View style={styles.headerContent}>
          <Ionicons
            name="cart"
            size={32}
            color={isDark ? '#FFF' : '#4CAF50'}
          />
          <Text
            style={[
              styles.headerTitle,
              isDark ? styles.headerTitleDark : styles.headerTitleLight,
            ]}
          >
            Shopping List
          </Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={handleDeletePurchased}
            style={styles.headerButton}
            accessibilityLabel="Delete purchased items"
            accessibilityRole="button"
          >
            <Ionicons
              name="checkmark-done"
              size={24}
              color={isDark ? '#FFF' : '#4CAF50'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleClearAll}
            style={styles.headerButton}
            accessibilityLabel="Clear all items"
            accessibilityRole="button"
          >
            <Ionicons
              name="trash-bin"
              size={24}
              color={isDark ? '#FFF' : '#F44336'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Statistics Bar */}
      {totalItems > 0 && (
        <StatisticsBar totalItems={totalItems} purchasedItems={purchasedItems} />
      )}

      {/* Add/Edit Form */}
      <AddEditItemForm
        onSubmit={editingItemId ? handleEditItem : handleAddItem}
        onCancel={handleCancelEdit}
        editingItem={editingItem}
        isEditing={!!editingItemId}
      />

      {/* Shopping List */}
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ShoppingListItem
              item={item}
              onTogglePurchased={handleTogglePurchased}
              onEdit={handleStartEdit}
              onDelete={handleDeleteItem}
            />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLight: {
    backgroundColor: '#F5F5F5',
  },
  containerDark: {
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    paddingTop: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  headerLight: {
    backgroundColor: '#FFFFFF',
  },
  headerDark: {
    backgroundColor: '#1C1C1E',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerTitleLight: {
    color: '#000000',
  },
  headerTitleDark: {
    color: '#FFFFFF',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 16,
  },
  headerButton: {
    padding: 8,
  },
  listContent: {
    paddingVertical: 8,
    paddingBottom: 20,
  },
});
