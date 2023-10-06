import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css'

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return (
        <li className="item" key={id}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    )
}
