import "./App.css";
import Profile from "./profile/profile";
import Statistic from "./statistic/statistic";
import user from "../data/user.json";
import statistic from "../data/statistic.json";

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
    </div>
  );
}

export default App;
