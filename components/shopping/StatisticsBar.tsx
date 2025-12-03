/**
 * Statistics Bar Component
 * Displays shopping list statistics such as total items,
 * purchased items, and remaining items
 */

import { useColorScheme } from '@/hooks/use-color-scheme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface StatisticsBarProps {
  totalItems: number;
  purchasedItems: number;
}

export default function StatisticsBar({
  totalItems,
  purchasedItems,
}: StatisticsBarProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const remainingItems = totalItems - purchasedItems;
  const percentage = totalItems > 0 ? (purchasedItems / totalItems) * 100 : 0;

  return (
    <View
      style={[
        styles.container,
        isDark ? styles.containerDark : styles.containerLight,
      ]}
    >
      <View style={styles.statItem}>
        <Text
          style={[
            styles.statValue,
            isDark ? styles.textDark : styles.textLight,
          ]}
        >
          {totalItems}
        </Text>
        <Text
          style={[
            styles.statLabel,
            isDark ? styles.labelDark : styles.labelLight,
          ]}
        >
          Total
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <Text
          style={[
            styles.statValue,
            styles.purchasedValue,
          ]}
        >
          {purchasedItems}
        </Text>
        <Text
          style={[
            styles.statLabel,
            isDark ? styles.labelDark : styles.labelLight,
          ]}
        >
          Purchased
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <Text
          style={[
            styles.statValue,
            styles.remainingValue,
          ]}
        >
          {remainingItems}
        </Text>
        <Text
          style={[
            styles.statLabel,
            isDark ? styles.labelDark : styles.labelLight,
          ]}
        >
          Remaining
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.statItem}>
        <Text
          style={[
            styles.statValue,
            isDark ? styles.textDark : styles.textLight,
          ]}
        >
          {percentage.toFixed(0)}%
        </Text>
        <Text
          style={[
            styles.statLabel,
            isDark ? styles.labelDark : styles.labelLight,
          ]}
        >
          Complete
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
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
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  textLight: {
    color: '#000000',
  },
  textDark: {
    color: '#FFFFFF',
  },
  purchasedValue: {
    color: '#4CAF50',
  },
  remainingValue: {
    color: '#FF9800',
  },
  statLabel: {
    fontSize: 12,
  },
  labelLight: {
    color: '#666666',
  },
  labelDark: {
    color: '#999999',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#E0E0E0',
  },
});
