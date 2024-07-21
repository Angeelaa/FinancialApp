import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Sample data for transactions
const transactions = [
    { id: '1', name: 'No Frills', amount: '$150', date: 'July 1, 2024' },
    { id: '2', name: 'McDonalds', amount: '$50', date: 'June 22, 2024', },
    { id: '3', name: 'H & M', amount: '$300', date: 'June 12, 2024', },
    { id: '4', name: 'Tim Hortons', amount: '$10', date: 'July 11, 2024', },
    { id: '5', name: 'JD Sports', amount: '$200', date: 'June 3, 2024', },
    { id: '6', name: 'KFC', amount: '$50', date: 'June 27, 2024', },
    { id: '7', name: 'Gongcha', amount: '$20', date: 'July 5, 2024', },
    { id: '8', name: 'Miniso', amount: '$25', date: 'June 20, 2024', },
    { id: '9', name: 'Zara', amount: '$100', date: 'June 27, 2024', },
    { id: '10', name: 'Pizza Pizza', amount: '$50', date: 'June 16, 2024', },
    { id: '11', name: 'SilverCity', amount: '$75', date: 'July 5, 2024', },
];

// Function to calculate the total expenses
const getTotalExpenses = () => {
  return transactions.reduce((total, transaction) => 
    total + parseFloat(transaction.amount.slice(1)), 0);
};

// Function to get the highest transaction
const getHighestTransaction = () => {
  return transactions.reduce((max, transaction) => 
    parseFloat(transaction.amount.slice(1)) > parseFloat(max.amount.slice(1)) ? transaction : max, transactions[0]);
};

// Function to get the lowest transaction
const getLowestTransaction = () => {
  return transactions.reduce((min, transaction) => 
    parseFloat(transaction.amount.slice(1)) < parseFloat(min.amount.slice(1)) ? transaction : min, transactions[0]);
};

const SummaryScreen = () => {
  // Calculate required data
  const totalTransactions = transactions.length;
  const totalAmount = getTotalExpenses();
  const highestTransaction = getHighestTransaction();
  const lowestTransaction = getLowestTransaction();

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        {/* Displaying total number of transactions */}
        <View style={styles.row}>
          <Text style={styles.leftText}>Total Number of Transactions</Text>
          <Text style={styles.rightText}>{totalTransactions}</Text>
        </View>
        <View style={styles.separator} />
        
        {/* Displaying total expenses */}
        <View style={styles.row}>
          <Text style={styles.leftText}>Total Expenses</Text>
          <Text style={styles.rightText}>${totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.separator} />
        
        {/* Displaying highest spending */}
        <Text style={styles.title}>Highest Spending</Text>
        <View style={styles.row}>
          <Text style={styles.leftText}>{highestTransaction.name}</Text>
          <Text style={styles.rightText}>${parseFloat(highestTransaction.amount.slice(1)).toFixed(2)}</Text>
        </View>
        <View style={styles.separator} />
        
        {/* Displaying lowest spending */}
        <Text style={styles.title}>Lowest Spending</Text>
        <View style={styles.row}>
          <Text style={styles.leftText}>{lowestTransaction.name}</Text>
          <Text style={styles.rightText}>${parseFloat(lowestTransaction.amount.slice(1)).toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

// Styles for the SummaryScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E0E0E0', // Background color of the entire screen
  },
  box: {
    backgroundColor: '#EBAFA3', // Background color of the summary box
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  leftText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd', // Color of the separator lines
    marginVertical: 10,
  },
});

export default SummaryScreen;
