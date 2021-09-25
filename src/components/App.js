import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../Routes/Home";
import Detail from "../Routes/Detail";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
};

export default App;
