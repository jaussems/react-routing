import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./pages/Homepage";
import DiscoverMovies from "./pages/DiscoverMoviesPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <h1>Hello world!</h1>
      <Switch>
        <Route path="/discover" component={DiscoverMovies} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
