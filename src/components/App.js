import "./App.css";
import Profile from "./Profile/Profile";
import Statistic from "./statistic/statistic";
import FriendList from "./FriendList/FriendList";
import user from "../data/user.json";
import statistic from "../data/statistic.json";
import friends from "../data/friends.json";

function App() {
  return (
    <div className="App">
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistic title="Upload stats" stats={statistic} />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
