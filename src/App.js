import "./App.css";
import Profile from "./Profile/Profile";
import user from "./data/user.json";

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
    </div>
  );
}

export default App;
