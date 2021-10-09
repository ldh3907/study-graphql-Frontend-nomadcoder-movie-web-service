import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
};

export default App;
