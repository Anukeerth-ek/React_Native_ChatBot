import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: { position: 'absolute' },
        }}>
        <Tabs.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="Search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="search-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="videocam-outline"
          options={{
            title: 'videocam-outline',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="videocam-outline" color={color} />,
          }}
        />
        <Tabs.Screen
          name="Add Connection"
          options={{
            title: 'Add Connection',
            tabBarIcon: ({ color }) => <Ionicons size={28} name="person-add-outline" color={color} />,
          }}
        />
      </Tabs>
    </View>
  );
}
