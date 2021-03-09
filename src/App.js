import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/public/navbar";
import Home from "./views/public/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
