import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";
import Proptypes from "prop-types";

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.number.isRequired,
      avatar: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      isOnline: Proptypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

export default FriendList;
