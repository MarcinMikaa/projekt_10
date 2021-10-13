import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Playlist from "./components/PlaylistAbout";
import Footer from "./components/About/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/about/:id" component={Playlist} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
