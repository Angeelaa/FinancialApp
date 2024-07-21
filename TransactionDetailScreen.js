import React from "react";
import { View, Text, StyleSheet } from "react-native";

// TransactionDetailScreen component
const TransactionDetailScreen = ({ route }) => {
    // Destructure transaction data from route params
    const { transaction } = route.params;

    return (
        <View style={styles.container}>
            {/* Top section displaying transaction details */}
            <View style={styles.topSection}>
                <Text style={styles.amountText}>{transaction.amount}</Text>
                <Text style={styles.centerText}>{transaction.name}</Text>
                <Text style={styles.centerText}>{transaction.location}</Text>
            </View>

            {/* Date row displaying transaction date */}
            <View style={styles.dateRow}>
                <Text style={styles.leftText}>Transaction Date</Text>
                <Text style={styles.rightText}>{transaction.date}</Text>
            </View>
        </View>
    );
};

// Styles for TransactionDetailScreen
const styles = StyleSheet.create({
    // Main container styling
    container: {
        flex: 1,
        paddingHorizontal: 20, 
        backgroundColor: '#E0E0E0', 
        alignItems: 'center', 
    },
    // Styling for the top section of the screen
    topSection: {
        width: '105%', 
        paddingVertical: 30, 
        backgroundColor: '#EBAFA3',
        alignItems: 'center', 
        borderRadius: 10, 
        marginTop: 5, 
    },
    // Styling for the amount text
    amountText: {
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 5, 
        textAlign: 'center', 
    },
    // Styling for center-aligned text (name and location)
    centerText: {
        fontSize: 20, 
        fontWeight: 'bold', 
        marginBottom: 5, 
        textAlign: 'center', 
    },
    // Styling for the date row
    dateRow: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: '105%', 
        paddingHorizontal: 5, 
        paddingVertical: 5, 
        backgroundColor: '#E0E0E0', 
        marginTop: 10, 
    },
    // Styling for the left text in the date row
    leftText: {
        fontSize: 20, 
        color: '#333', 
        fontWeight: 'bold', 
    },
    // Styling for the right text in the date row
    rightText: {
        fontSize: 20, 
        color: '#333', 
        fontWeight: 'bold', 
    },
});

export default TransactionDetailScreen;
