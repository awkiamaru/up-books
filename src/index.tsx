import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BookList from './pages/BookList';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BookList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    height: 20,
    borderRadius: 14,
  },
});
