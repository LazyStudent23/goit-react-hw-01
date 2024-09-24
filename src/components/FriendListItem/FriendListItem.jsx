import styles from "./FriendListItem.module.css";

const FriendListItem = (props) => {
  const { avatar, name, isOnline } = props;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
