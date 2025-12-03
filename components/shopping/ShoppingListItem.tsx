/**
 * Shopping List Item Component
 * Displays a single shopping item with checkbox, name, quantity,
 * and action buttons (edit/delete)
 */

import { useColorScheme } from '@/hooks/use-color-scheme';
import { ShoppingItem } from '@/store/slices/shoppingListSlice';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ShoppingListItemProps {
  item: ShoppingItem;
  onTogglePurchased: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function ShoppingListItem({
  item,
  onTogglePurchased,
  onEdit,
  onDelete,
}: ShoppingListItemProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View
      style={[
        styles.container,
        isDark ? styles.containerDark : styles.containerLight,
        item.purchased && styles.purchasedContainer,
      ]}
    >
      {/* Checkbox */}
      <TouchableOpacity
        onPress={() => onTogglePurchased(item.id)}
        style={styles.checkbox}
        accessibilityLabel={`Mark ${item.name} as ${item.purchased ? 'not purchased' : 'purchased'}`}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.purchased }}
      >
        <Ionicons
          name={item.purchased ? 'checkbox' : 'square-outline'}
          size={28}
          color={item.purchased ? '#4CAF50' : (isDark ? '#999' : '#666')}
        />
      </TouchableOpacity>

      {/* Item Details */}
      <View style={styles.detailsContainer}>
        <Text
          style={[
            styles.itemName,
            isDark ? styles.textDark : styles.textLight,
            item.purchased && styles.purchasedText,
          ]}
          numberOfLines={2}
        >
          {item.name}
        </Text>
        <Text
          style={[
            styles.itemQuantity,
            isDark ? styles.quantityDark : styles.quantityLight,
            item.purchased && styles.purchasedQuantity,
          ]}
        >
          Quantity: {item.quantity}
        </Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionsContainer}>
        <Pressable
          onPress={() => onEdit(item.id)}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          accessibilityLabel={`Edit ${item.name}`}
          accessibilityRole="button"
        >
          <Ionicons name="create-outline" size={22} color="#2196F3" />
        </Pressable>

        <Pressable
          onPress={() => onDelete(item.id)}
          style={({ pressed }) => [
            styles.actionButton,
            pressed && styles.actionButtonPressed,
          ]}
          accessibilityLabel={`Delete ${item.name}`}
          accessibilityRole="button"
        >
          <Ionicons name="trash-outline" size={22} color="#F44336" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  containerLight: {
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    backgroundColor: '#2C2C2E',
  },
  purchasedContainer: {
    opacity: 0.7,
  },
  checkbox: {
    marginRight: 12,
    padding: 4,
  },
  detailsContainer: {
    flex: 1,
    marginRight: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  textLight: {
    color: '#000000',
  },
  textDark: {
    color: '#FFFFFF',
  },
  purchasedText: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  itemQuantity: {
    fontSize: 14,
  },
  quantityLight: {
    color: '#666666',
  },
  quantityDark: {
    color: '#999999',
  },
  purchasedQuantity: {
    opacity: 0.6,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    padding: 8,
    borderRadius: 8,
  },
  actionButtonPressed: {
    opacity: 0.6,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});
