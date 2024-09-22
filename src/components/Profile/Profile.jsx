import styles from "./Profile.module.css";

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <div className={styles.image}>
          <img src={image} alt="User avatar" className={styles.img} />
        </div>
        <p className={styles.name}>{name}</p>
        <p>@{tag}</p>    <p>{location}</p>
      </div>
      <ul>
        <li>
                <span>Followers</span>      <span>{stats.followers}</span>
        </li>
        <li>
                <span>Views</span>      <span>{stats.views}</span>
        </li>
        <li>
                <span>Likes</span>      <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
