import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BookList from './pages/BookList';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BookList />
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Settings!a
        <Icon name="grid" size={20} color="#000" />
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{ style: styles.text, activeTintColor: '#4B4453' }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="grid" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Indicados"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="book" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="edit" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingBottom: 5,
    paddingTop: 0,
    marginTop: 0,
  },
});
