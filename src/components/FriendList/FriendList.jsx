import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
// add {} to props friends
