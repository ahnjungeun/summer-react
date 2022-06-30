import Profile from "./components/Profile";
import Movie from "./components/Movie";
import { dummy } from './movieDummy';

function App() {
  return (
    <div className="app-container">
      {
        dummy.results.map(item => {
          return (
            <Movie
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            ></Movie>
          )
        })
      }
    </div>
  );
}

export default App;
