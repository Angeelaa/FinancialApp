import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TransactionsScreen from "./TransactionsScreen";
import TransactionDetailScreen from "./TransactionDetailScreen";
import SummaryScreen from "./SummaryScreen";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons for tab icons

const Tab = createBottomTabNavigator(); // Creating bottom tab navigator
const Stack = createStackNavigator(); // Creating stack navigator

// Stack Navigator for Transactions screens
const TransactionsStack = () => {
  return (
    <Stack.Navigator>
      {/* Screen for the list of transactions */}
      <Stack.Screen 
        name="TransactionsList" 
        component={TransactionsScreen} 
        options={{ 
          title: 'Transaction List', // Title for the screen
          headerStyle: {
            backgroundColor: '#F3E8E5', // Background color of the header
          },
        }} 
      />
      {/* Screen for the transaction detail */}
      <Stack.Screen 
        name="TransactionDetail" 
        component={TransactionDetailScreen} 
        options={{ 
          title: 'Transaction Detail', // Title for the screen
          headerStyle: {
            backgroundColor: '#F3E8E5', // Background color of the header
          },
        }}
      />
    </Stack.Navigator>
  );
};

// Main App component
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // Function to determine the icon for each tab
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            // Setting icon based on the route name
            if (route.name === 'Transactions') {
              iconName = focused ? 'payment' : 'payment'; 
            } else if (route.name === 'Summary') {
              iconName = focused ? 'analytics' : 'analytics'; 
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: '#F3E8E5', 
          },
        })}
      >
        {/* Tab for Transactions, hides header */}
        <Tab.Screen 
          name="Transactions" 
          component={TransactionsStack} 
          options={{ headerShown: false }} 
        />
        {/* Tab for Summary, shows header */}
        <Tab.Screen 
          name="Summary" 
          component={SummaryScreen} 
          options={{ headerShown: true }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
