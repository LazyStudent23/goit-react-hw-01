import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  const statusState = clsx(styles.status, isOnline && styles.online);
  return (
    <div>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={statusState}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
