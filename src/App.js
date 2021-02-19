import Profile from './component/Profile';
import statisticalData from './statistical-data.json';
import Statistics from './component/Statistics';
import user from './user.json';

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
    </>
  );
}

export default App;
