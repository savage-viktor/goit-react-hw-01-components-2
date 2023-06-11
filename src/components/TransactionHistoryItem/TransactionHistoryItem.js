import styles from "./TransactionHistoryItem.module.css";
import Proptypes from "prop-types";

function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={styles.row}>
      <td className={styles.cell}>{type}</td>
      <td className={styles.cell}>{amount}</td>
      <td className={styles.cell}>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: Proptypes.string.isRequired,
  amount: Proptypes.string.isRequired,
  currency: Proptypes.string.isRequired,
};

export default TransactionHistoryItem;
