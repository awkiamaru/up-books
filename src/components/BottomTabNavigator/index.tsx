import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import BookList from '../../pages/BookList';

Icon.loadFont();
function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Settings!
        <Icon name="grid" size={20} color="#000" />
      </Text>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Settings!
        <Icon name="grid" size={20} color="#000" />
      </Text>
    </View>
  );
}
function IndicatedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <BookList />
    </SafeAreaView>
  );
}
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ style: styles.text, activeTintColor: '#4B4453' }}
      initialRouteName="Indicados"
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
        component={IndicatedScreen}
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
};

export default BottomTabNavigator;

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
