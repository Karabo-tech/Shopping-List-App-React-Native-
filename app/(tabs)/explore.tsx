/**
 * About Screen
 * Provides information about the Shopping List App,
 * its features, and technical implementation details
 */

import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, View } from 'react-native';

import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AboutScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <ScrollView
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
        <Ionicons
          name="information-circle"
          size={60}
          color={isDark ? '#4CAF50' : '#4CAF50'}
        />
        <ThemedText type="title" style={styles.title}>
          Shopping List App
        </ThemedText>
        <ThemedText style={styles.version}>Version 1.0.0</ThemedText>
      </View>

      <ThemedView style={styles.content}>
        <ThemedText style={styles.description}>
          A powerful and user-friendly shopping list application built with React Native,
          Redux, and TypeScript. Manage your shopping items efficiently with features like
          adding, editing, deleting items, and tracking your progress.
        </ThemedText>

        <Collapsible title="📝 Features">
          <ThemedView style={styles.featureList}>
            <ThemedText style={styles.featureItem}>
              ✓ Add items with custom names and quantities
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Edit existing items inline
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Delete items with confirmation
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Mark items as purchased with checkboxes
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ View shopping statistics (total, purchased, remaining)
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Delete all purchased items at once
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Clear entire list with one tap
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Persistent storage across app sessions
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Dark and light mode support
            </ThemedText>
            <ThemedText style={styles.featureItem}>
              ✓ Accessible for screen readers
            </ThemedText>
          </ThemedView>
        </Collapsible>

        <Collapsible title="🛠️ Technical Stack">
          <ThemedView style={styles.techList}>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">React Native:</ThemedText> Cross-platform mobile framework
            </ThemedText>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">Expo:</ThemedText> Development platform and tooling
            </ThemedText>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">Redux Toolkit:</ThemedText> State management solution
            </ThemedText>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">Redux Persist:</ThemedText> State persistence
            </ThemedText>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">AsyncStorage:</ThemedText> Local data storage
            </ThemedText>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">TypeScript:</ThemedText> Type-safe development
            </ThemedText>
            <ThemedText style={styles.techItem}>
              <ThemedText type="defaultSemiBold">Expo Router:</ThemedText> File-based navigation
            </ThemedText>
          </ThemedView>
        </Collapsible>

        <Collapsible title="📁 File Structure">
          <ThemedView style={styles.structureList}>
            <ThemedText style={styles.structureItem}>
              <ThemedText type="defaultSemiBold">store/</ThemedText> - Redux store configuration
            </ThemedText>
            <ThemedText style={styles.structureItem}>
              <ThemedText type="defaultSemiBold">store/slices/</ThemedText> - Redux slices and reducers
            </ThemedText>
            <ThemedText style={styles.structureItem}>
              <ThemedText type="defaultSemiBold">components/shopping/</ThemedText> - Shopping list components
            </ThemedText>
            <ThemedText style={styles.structureItem}>
              <ThemedText type="defaultSemiBold">app/(tabs)/</ThemedText> - Main app screens
            </ThemedText>
            <ThemedText style={styles.structureItem}>
              <ThemedText type="defaultSemiBold">hooks/</ThemedText> - Custom React hooks
            </ThemedText>
          </ThemedView>
        </Collapsible>

        <Collapsible title="🔧 Redux Implementation">
          <ThemedText style={styles.sectionText}>
            This app uses Redux Toolkit for state management with the following structure:
          </ThemedText>
          <ThemedView style={styles.reduxList}>
            <ThemedText style={styles.reduxItem}>
              <ThemedText type="defaultSemiBold">Actions:</ThemedText> addItem, editItem, deleteItem,
              togglePurchased, clearAllItems, deletePurchasedItems
            </ThemedText>
            <ThemedText style={styles.reduxItem}>
              <ThemedText type="defaultSemiBold">Reducers:</ThemedText> Handle all state updates for the shopping list
            </ThemedText>
            <ThemedText style={styles.reduxItem}>
              <ThemedText type="defaultSemiBold">Persist:</ThemedText> Automatically saves state to AsyncStorage
            </ThemedText>
          </ThemedView>
        </Collapsible>

        <Collapsible title="♿ Accessibility">
          <ThemedText style={styles.sectionText}>
            This app follows accessibility best practices:
          </ThemedText>
          <ThemedView style={styles.accessibilityList}>
            <ThemedText style={styles.accessibilityItem}>
              • All interactive elements have accessibility labels
            </ThemedText>
            <ThemedText style={styles.accessibilityItem}>
              • Proper accessibility roles for buttons and inputs
            </ThemedText>
            <ThemedText style={styles.accessibilityItem}>
              • Screen reader compatible
            </ThemedText>
            <ThemedText style={styles.accessibilityItem}>
              • High contrast support with dark/light modes
            </ThemedText>
          </ThemedView>
        </Collapsible>

        <Collapsible title="📚 Resources">
          <ThemedView style={styles.linksList}>
            <ExternalLink href="https://reactnative.dev/docs/getting-started">
              <ThemedText type="link">React Native Documentation</ThemedText>
            </ExternalLink>
            <ExternalLink href="https://redux-toolkit.js.org/">
              <ThemedText type="link">Redux Toolkit Documentation</ThemedText>
            </ExternalLink>
            <ExternalLink href="https://docs.expo.dev/">
              <ThemedText type="link">Expo Documentation</ThemedText>
            </ExternalLink>
            <ExternalLink href="https://www.typescriptlang.org/docs/">
              <ThemedText type="link">TypeScript Documentation</ThemedText>
            </ExternalLink>
          </ThemedView>
        </Collapsible>

        <ThemedView style={styles.footer}>
          <ThemedText style={styles.footerText}>
            Created with ❤️ using React Native & Expo
          </ThemedText>
          <ThemedText style={styles.footerText}>
            © 2025 Shopping List App
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
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
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
  },
  headerLight: {
    backgroundColor: '#FFFFFF',
  },
  headerDark: {
    backgroundColor: '#1C1C1E',
  },
  title: {
    marginTop: 16,
    marginBottom: 8,
  },
  version: {
    fontSize: 14,
    opacity: 0.7,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
  },
  featureList: {
    gap: 8,
    paddingLeft: 8,
  },
  featureItem: {
    fontSize: 15,
    lineHeight: 22,
  },
  techList: {
    gap: 12,
  },
  techItem: {
    fontSize: 15,
    lineHeight: 22,
  },
  structureList: {
    gap: 10,
    paddingLeft: 8,
  },
  structureItem: {
    fontSize: 15,
    lineHeight: 22,
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
  },
  reduxList: {
    gap: 12,
  },
  reduxItem: {
    fontSize: 15,
    lineHeight: 22,
  },
  accessibilityList: {
    gap: 8,
    paddingLeft: 8,
  },
  accessibilityItem: {
    fontSize: 15,
    lineHeight: 22,
  },
  linksList: {
    gap: 16,
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
    gap: 8,
  },
  footerText: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
});
