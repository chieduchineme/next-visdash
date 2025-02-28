import React from 'react';
import styles from '../styles/myCards.module.css';

/**
 * Props for the Card component
 * @param {string} theme - Defines the theme of the card, either 'dark' or 'light'.
 */
interface CardProps {
  theme: 'dark' | 'light';
}

/**
 * Card Component
 * Represents a single credit/debit card with account details.
 *
 * Features:
 * - Displays balance, cardholder name, expiry date, and card number.
 * - Supports two themes: 'dark' and 'light' for different styling.
 * - Includes dynamic chip and toggle icons based on the selected theme.
 *
 * @param {CardProps} props - Component props
 * @returns {JSX.Element} - Rendered Card component
 */
const Card: React.FC<CardProps> = ({ theme }) => {
  // Dynamically select chip and toggle icons based on theme
  const chipSrc = theme === 'dark' ? '/New/chipForBlack.svg' : '/New/chipForWhite.svg';
  const toggleSrc = theme === 'dark' ? '/New/toggleForBlack.svg' : '/New/toggleForWhite.svg';

  return (
    <div className={`${styles.card} ${styles[theme]}`}>
      {/* Balance Section */}
      <div className={styles.balance}>Balance</div>
      <p className={styles.balanceAmt}>$5,756</p>

      {/* Cardholder Details */}
      <div className={styles.cardDetailsDiv}>
        <div className={styles.cardDetails}>
          <div className={styles.cardHolder}>CARD HOLDER</div>
          <p>Eddy Cusuma</p>
        </div>
        <div className={styles.cardDetails}>
          <div className={styles.cardHolder}>VALID THRU</div>
          <p>12/22</p>
        </div>
      </div>

      {/* Horizontal Separator */}
      <hr className={styles.hrLine} />

      {/* Card Number */}
      <div className={styles.cardNumber}>3778 **** **** 1234</div>

      {/* Chip and Toggle Icons */}
      <img src={chipSrc} alt="Chip Icon" className={styles.chipIcon} />
      <img src={toggleSrc} alt="Toggle Icon" className={styles.toggleIcon} />
    </div>
  );
};

/**
 * MyCards Component
 * Displays a collection of user's cards with an option to view all.
 *
 * Features:
 * - Shows a section title "My Cards" with a "See All" link.
 * - Renders multiple Card components in both 'dark' and 'light' themes.
 *
 * @returns {JSX.Element} - Rendered MyCards component
 */
const MyCards: React.FC = () => {
  return (
    <div className={styles.myCards}>
      {/* Header Section with "See All" Link */}
      <div className={styles.seeAll}>
        <h4 className={styles.myCardsText}>My Cards</h4>
        <a href="#" className={styles.seeAllLink}>See All</a>
      </div>

      {/* Cards Display Section */}
      <div className={styles.cards}>
        <Card theme="dark" />
        <Card theme="light" />
      </div>
    </div>
  );
};

export default MyCards;
