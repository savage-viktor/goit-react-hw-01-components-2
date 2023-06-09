import "./App.css";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "./data/user.json";
import statistics from "./data/statistics.json";

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
      <Statistics title="Upload stats" stats={statistics} />
    </div>
  );
}

export default App;
