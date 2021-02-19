import Profile from './component/Profile';
import statisticalData from './statistical-data.json';
import Statistics from './component/Statistics';
import FriendList from './component/FriendList';
import TransactionHistory from './component/TransactionHistory';
import transactions from './transactions.json';
import user from './user.json';
import friends from './friends.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
