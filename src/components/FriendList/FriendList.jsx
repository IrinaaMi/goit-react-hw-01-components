import styles from './FriendList.module.css'
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
export const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        key={id}
                    />
                )
            })}
        </ul>
    )
}
