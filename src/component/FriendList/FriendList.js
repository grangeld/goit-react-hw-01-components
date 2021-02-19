import s from './FriendList.module.css';

function FriendsList(props) {
  return (
    <ul className={s['friend-list']}>
      {props.friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span
            className={
              s.status + ' ' + (friend.isOnline ? s.online : s.offline)
            }
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
