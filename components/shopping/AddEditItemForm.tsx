/**
 * Add/Edit Item Form Component
 * A reusable form component for adding new items or editing existing ones
 * Includes validation and user feedback
 */

import { useColorScheme } from '@/hooks/use-color-scheme';
import { ShoppingItem } from '@/store/slices/shoppingListSlice';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

interface AddEditItemFormProps {
  onSubmit: (name: string, quantity: number) => void;
  onCancel?: () => void;
  editingItem?: ShoppingItem | null;
  isEditing?: boolean;
}

export default function AddEditItemForm({
  onSubmit,
  onCancel,
  editingItem,
  isEditing = false,
}: AddEditItemFormProps) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [errors, setErrors] = useState({ name: '', quantity: '' });
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Load data if editing
  useEffect(() => {
    if (isEditing && editingItem) {
      setItemName(editingItem.name);
      setQuantity(editingItem.quantity.toString());
    } else {
      setItemName('');
      setQuantity('1');
    }
    setErrors({ name: '', quantity: '' });
  }, [isEditing, editingItem]);

  // Validate input fields
  const validateInputs = (): boolean => {
    let isValid = true;
    const newErrors = { name: '', quantity: '' };

    // Validate name
    if (!itemName.trim()) {
      newErrors.name = 'Item name is required';
      isValid = false;
    } else if (itemName.trim().length < 2) {
      newErrors.name = 'Item name must be at least 2 characters';
      isValid = false;
    }

    // Validate quantity
    const quantityNum = parseInt(quantity);
    if (!quantity || isNaN(quantityNum)) {
      newErrors.quantity = 'Quantity must be a number';
      isValid = false;
    } else if (quantityNum < 1) {
      newErrors.quantity = 'Quantity must be at least 1';
      isValid = false;
    } else if (quantityNum > 9999) {
      newErrors.quantity = 'Quantity must be less than 10000';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    if (validateInputs()) {
      onSubmit(itemName.trim(), parseInt(quantity));
      
      // Reset form if adding new item
      if (!isEditing) {
        setItemName('');
        setQuantity('1');
      }
      setErrors({ name: '', quantity: '' });
    }
  };

  // Handle cancel action
  const handleCancel = () => {
    setItemName('');
    setQuantity('1');
    setErrors({ name: '', quantity: '' });
    if (onCancel) onCancel();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View
        style={[
          styles.formContainer,
          isDark ? styles.formContainerDark : styles.formContainerLight,
        ]}
      >
        {/* Title */}
        <Text
          style={[
            styles.title,
            isDark ? styles.titleDark : styles.titleLight,
          ]}
        >
          {isEditing ? 'Edit Item' : 'Add New Item'}
        </Text>

        {/* Item Name Input */}
        <View style={styles.inputGroup}>
          <Text
            style={[
              styles.label,
              isDark ? styles.labelDark : styles.labelLight,
            ]}
          >
            Item Name
          </Text>
          <TextInput
            style={[
              styles.input,
              isDark ? styles.inputDark : styles.inputLight,
              errors.name ? styles.inputError : null,
            ]}
            value={itemName}
            onChangeText={(text) => {
              setItemName(text);
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            placeholder="Enter item name"
            placeholderTextColor={isDark ? '#666' : '#999'}
            maxLength={50}
            accessibilityLabel="Item name input"
            accessibilityHint="Enter the name of the item to add to your shopping list"
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}
        </View>

        {/* Quantity Input */}
        <View style={styles.inputGroup}>
          <Text
            style={[
              styles.label,
              isDark ? styles.labelDark : styles.labelLight,
            ]}
          >
            Quantity
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={[
                styles.quantityButton,
                isDark ? styles.quantityButtonDark : styles.quantityButtonLight,
              ]}
              onPress={() => {
                const num = parseInt(quantity) || 1;
                if (num > 1) setQuantity((num - 1).toString());
              }}
              accessibilityLabel="Decrease quantity"
              accessibilityRole="button"
            >
              <Ionicons name="remove" size={20} color={isDark ? '#FFF' : '#000'} />
            </TouchableOpacity>

            <TextInput
              style={[
                styles.quantityInput,
                isDark ? styles.inputDark : styles.inputLight,
                errors.quantity ? styles.inputError : null,
              ]}
              value={quantity}
              onChangeText={(text) => {
                setQuantity(text);
                if (errors.quantity) setErrors({ ...errors, quantity: '' });
              }}
              keyboardType="numeric"
              maxLength={4}
              accessibilityLabel="Quantity input"
              accessibilityHint="Enter the quantity of items"
            />

            <TouchableOpacity
              style={[
                styles.quantityButton,
                isDark ? styles.quantityButtonDark : styles.quantityButtonLight,
              ]}
              onPress={() => {
                const num = parseInt(quantity) || 0;
                if (num < 9999) setQuantity((num + 1).toString());
              }}
              accessibilityLabel="Increase quantity"
              accessibilityRole="button"
            >
              <Ionicons name="add" size={20} color={isDark ? '#FFF' : '#000'} />
            </TouchableOpacity>
          </View>
          {errors.quantity ? (
            <Text style={styles.errorText}>{errors.quantity}</Text>
          ) : null}
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonContainer}>
          {isEditing && (
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={handleCancel}
              accessibilityLabel="Cancel editing"
              accessibilityRole="button"
            >
              <Ionicons name="close" size={20} color="#FFF" />
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              styles.submitButton,
              isEditing && styles.buttonFlex,
            ]}
            onPress={handleSubmit}
            accessibilityLabel={isEditing ? 'Save changes' : 'Add item to list'}
            accessibilityRole="button"
          >
            <Ionicons
              name={isEditing ? 'checkmark' : 'add'}
              size={20}
              color="#FFF"
            />
            <Text style={styles.buttonText}>
              {isEditing ? 'Save' : 'Add Item'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  formContainer: {
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formContainerLight: {
    backgroundColor: '#FFFFFF',
  },
  formContainerDark: {
    backgroundColor: '#2C2C2E',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  titleLight: {
    color: '#000000',
  },
  titleDark: {
    color: '#FFFFFF',
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  labelLight: {
    color: '#333333',
  },
  labelDark: {
    color: '#CCCCCC',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputLight: {
    borderColor: '#DDDDDD',
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  inputDark: {
    borderColor: '#444444',
    backgroundColor: '#1C1C1E',
    color: '#FFFFFF',
  },
  inputError: {
    borderColor: '#F44336',
  },
  errorText: {
    color: '#F44336',
    fontSize: 12,
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  quantityButtonLight: {
    borderColor: '#DDDDDD',
    backgroundColor: '#F5F5F5',
  },
  quantityButtonDark: {
    borderColor: '#444444',
    backgroundColor: '#3C3C3E',
  },
  quantityInput: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderRadius: 8,
    gap: 8,
    flex: 1,
  },
  buttonFlex: {
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButton: {
    backgroundColor: '#757575',
    flex: 1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
