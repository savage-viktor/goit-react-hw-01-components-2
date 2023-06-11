import Proptypes from "prop-types";
import styles from "./FriendListItem.module.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  isOnline: Proptypes.bool.isRequired,
};

export default FriendListItem;
