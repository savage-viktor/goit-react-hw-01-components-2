import styles from "./TransactionHistory.module.css";
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

import Proptypes from "prop-types";

function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <TransactionHistoryItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      type: Proptypes.string.isRequired,
      amount: Proptypes.string.isRequired,
      currency: Proptypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
