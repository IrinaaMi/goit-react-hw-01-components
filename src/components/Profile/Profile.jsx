import PropTypes from 'prop-types';
import styles from './Profile.module.css'
import user from '../Profile/user.json'
export const Profile = ({ }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={user.avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className="name">{user.username}</p>
                <p className="tag">{user.tag}</p>
                <p className="location">{user.location}</p>
            </div>

            <ul className={styles.stats}>
                <li className={styles.item}>
                    <span className="label">Followers</span>
                    <span className="quantity">{user.stats.followers}</span>
                </li>
                <li className={styles.item}>
                    <span className="label">Views</span>
                    <span className="quantity">{user.stats.views}</span>
                </li>
                <li className={styles.item}>
                    <span className="label">Likes</span>
                    <span className="quantity">{user.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}
Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
};