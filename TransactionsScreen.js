import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

// Sample data for transactions
const transactions = [
    { id: '1', name: 'No Frills', amount: '$150', date: 'July 1, 2024', location: 'Highbury Avenue, ON' },
    { id: '2', name: 'McDonalds', amount: '$50', date: 'June 22, 2024', location: 'Wellington Road, ON' },
    { id: '3', name: 'H & M', amount: '$300', date: 'June 12, 2024', location: 'Richmond Street, ON' },
    { id: '4', name: 'Tim Hortons', amount: '$10', date: 'July 11, 2024', location: 'Oxford Street, ON' },
    { id: '5', name: 'JD Sports', amount: '$200', date: 'June 3, 2024', location: 'Richmond Street, ON' },
    { id: '6', name: 'KFC', amount: '$50', date: 'June 27, 2024', location: 'Dundas Street, ON' },
    { id: '7', name: 'Gongcha', amount: '$20', date: 'July 5, 2024', location: 'Richmond Street, ON' },
    { id: '8', name: 'Miniso', amount: '$25', date: 'June 20, 2024', location: 'Richmond Street, ON' },
    { id: '9', name: 'Zara', amount: '$100', date: 'June 27, 2024', location: 'Richmond Street, ON' },
    { id: '10', name: 'Pizza Pizza', amount: '$50', date: 'June 16, 2024', location: 'Highbury Avenue, ON' },
    { id: '11', name: 'SilverCity', amount: '$75', date: 'July 5, 2024', location: 'Richmond Street' },
];

const TransactionsScreen = () => {
    const navigation = useNavigation();
  
    // Function to render each transaction item
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
        <View style={styles.itemContainer}>
          {/* Displaying the name of the transaction */}
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.itemRight}>
            {/* Displaying the amount of the transaction */}
            <Text style={styles.itemAmount}>{item.amount}</Text>
            {/* Chevron icon indicating navigation */}
            <Icon name="chevron-forward" size={20} color="#000" />
          </View>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        {/* Render the list of transactions */}
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id} // Unique key for each item
          renderItem={renderItem} // Function to render each item
        />
      </View>
    );
  };

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0', 
        padding: 10, 
    },
    itemContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: 15, 
        backgroundColor: '#EBAFA3', 
        marginBottom: 5, 
        borderRadius: 8, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.1, 
        shadowRadius: 5, 
        elevation: 3, 
    },
    itemName: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#333', 
    },
    itemRight: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    itemAmount: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#333', 
        marginRight: 5, 
    },
});

export default TransactionsScreen;
