import styles from './Profile.module.css'
export const Profile = ({ 
    username,
    tag,
    location,
    avatar,
    stats: {
        followers,
        views,
        likes,
    }
   }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className={styles.item}>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li className={styles.item}>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
}
