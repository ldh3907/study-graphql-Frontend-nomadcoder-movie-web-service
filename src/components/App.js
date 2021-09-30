import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
};

export default App;
