import "./App.scss";
import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import DiscoverMovies from "./pages/DiscoverMovies";
import NavBar from "./components/NavBar";
import SingleMoviePage from "./pages/SingleMoviePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/discover" component={DiscoverMovies} />
        <Route path="/movie/:id" component={SingleMoviePage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
