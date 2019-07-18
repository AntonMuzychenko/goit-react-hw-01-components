import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(elem => (
          <tr key={elem.id} className={styles.trLine}>
            <td className={styles.type}>{elem.type}</td>
            <td className={styles.amount}>{elem.amount}</td>
            <td className={styles.currency}>{elem.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequared,
      type: PropTypes.string.isRequared,
      amount: PropTypes.string.isRequared,
      currency: PropTypes.string.isRequared,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
