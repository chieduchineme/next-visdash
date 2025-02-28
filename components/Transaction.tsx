// Transaction.tsx
import React from 'react';
import styles from '../styles/recentTransactions.module.css';

/**
 * Props for the Transaction component.
 * 
 * @interface TransactionProps
 * @property {string} description - A short description of the transaction.
 * @property {string} date - The date of the transaction.
 * @property {string} amount - The amount involved in the transaction.
 * @property {string} amountColor - The color of the amount text (e.g., green for credit, red for debit).
 * @property {string} icon - The URL or path to the icon representing the transaction.
 */
interface TransactionProps {
  description: string;  // Description of the transaction
  date: string;         // Date when the transaction occurred
  amount: string;       // Amount of money involved in the transaction
  amountColor: string;  // Color of the amount text
  icon: string;         // Icon representing the transaction type
}

/**
 * Transaction Component
 * 
 * A presentational component to display a single transaction. It shows the 
 * transaction's description, amount (with custom color), date, and a related icon.
 * This component is reusable and displays each transaction's key details.
 * 
 * @param {TransactionProps} props - The properties for the Transaction component.
 * @returns {JSX.Element} - The rendered Transaction component.
 */
const Transaction: React.FC<TransactionProps> = ({
  description,
  date,
  amount,
  amountColor,
  icon,
}) => {
  return (
    <div className={styles.transaction}>
      {/* Icon representing the transaction */}
      <img src={icon} alt="Icon" className={styles.icon} />
      
      <div className={styles.details}>
        {/* Description of the transaction */}
        <span className={styles.description}>{description}</span>

        {/* Amount involved in the transaction with dynamic color */}
        <span className={styles.amount} style={{ color: amountColor }}>
          {amount}
        </span>

        {/* Date when the transaction occurred */}
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default Transaction;
