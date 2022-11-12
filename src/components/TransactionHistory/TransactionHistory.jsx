import React from 'react';
import { TransactionHistoryContainer, TransactionHistoryWrapper } from './TransactionHistory.styles';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryContainer>
      <TransactionHistoryWrapper>
        <thead>
        <tr>
          <th>TYPE</th>
          <th>AMOUNT</th>
          <th>CURRENCY</th>
        </tr>
        </thead>

        <tbody>
        {items.map(i => {
          return <tr key={i.id}>
            <td>{i.type.charAt(0).toUpperCase() + i.type.slice(1)}</td>
            <td>{i.amount}</td>
            <td>{i.currency}</td>
          </tr>;
        })}
        </tbody>
      </TransactionHistoryWrapper>
    </TransactionHistoryContainer>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ).isRequired,
};
