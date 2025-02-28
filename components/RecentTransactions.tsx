// components/RecentTransactions.tsx
import React from 'react';
import './Transaction';
import styles from '../styles/recentTransactions.module.css';

/**
 * A list of recent transactions.
 * Each transaction contains:
 * - description: The description of the transaction.
 * - date: The date the transaction occurred.
 * - amount: The amount of money involved in the transaction.
 * - amountColor: The color for the amount text (red for negative, green for positive).
 * - icon: Path to the icon image representing the transaction type.
 */
const transactions = [
  {
    description: 'Deposit from my Card',
    date: '28 January 2021',
    amount: '-$850',
    amountColor: 'red',
    icon: '/New/depositMyCard.svg', // Updated icon path
  },
  {
    description: 'Deposit Paypal',
    date: '25 January 2021',
    amount: '+$2,500',
    amountColor: 'green',
    icon: '/New/depositPaypal.svg', // Updated icon path
  },
  {
    description: 'Jemi Wilson',
    date: '21 January 2021',
    amount: '+$5,400',
    amountColor: 'green',
    icon: '/New/jemiWilson.svg', // Updated icon path
  },
];

/**
 * RecentTransactions Component
 * 
 * This component displays a list of recent financial transactions.
 * Each transaction shows an icon, description, amount, and date.
 *
 * Features:
 * - Displays transaction details like description, amount, and date.
 * - Each amount is colored based on whether it is positive (green) or negative (red).
 * - Icons are shown alongside transaction descriptions.
 *
 * @returns {JSX.Element} - The rendered RecentTransactions component.
 */
const RecentTransactions: React.FC = () => {
  return (
    <div className={styles.recentTransactions}>
      {/* Section Title */}
      <h4>Recent Transactions</h4>
      
      {/* Card Container for Transactions */}
      <div className={styles.recentTransactionsCard}>
        <div className={styles.transactions}>
          {transactions.map((transaction, index) => (
            <div key={index} className={styles.transaction}>
              {/* Transaction Icon */}
              <img src={transaction.icon} alt="Icon" className={styles.icon} />
              
              {/* Transaction Details */}
              <div className={styles.details}>
                <span className={styles.description}>{transaction.description}</span>
                <span
                  className={styles.amount}
                  style={{ color: transaction.amountColor }} // Conditional styling based on the amount color
                >
                  {transaction.amount}
                </span>
                <span className={styles.date}>{transaction.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
