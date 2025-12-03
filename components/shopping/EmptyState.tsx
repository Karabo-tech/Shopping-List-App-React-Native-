/**
 * Empty State Component
 * Displays a friendly message when the shopping list is empty
 */

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function EmptyState() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={styles.container}>
      <Ionicons
        name="cart-outline"
        size={80}
        color={isDark ? '#666' : '#CCC'}
      />
      <Text
        style={[
          styles.title,
          isDark ? styles.titleDark : styles.titleLight,
        ]}
      >
        Your shopping list is empty
      </Text>
      <Text
        style={[
          styles.subtitle,
          isDark ? styles.subtitleDark : styles.subtitleLight,
        ]}
      >
        Add items to get started!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  titleLight: {
    color: '#333333',
  },
  titleDark: {
    color: '#CCCCCC',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  subtitleLight: {
    color: '#666666',
  },
  subtitleDark: {
    color: '#999999',
  },
});
