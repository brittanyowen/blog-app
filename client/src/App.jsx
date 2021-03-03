import logo from "./logo.svg";
import "./App.css";
import PostEdit from "../src/screens/PostEdit/PostEdit"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          Home/Posts
        </Route>
        <Route exact path="/posts/:id">
          PostDetails
        </Route>
        <Route path="/add-post">PostCreate</Route>
        <Route exact path="/posts/:id/edit">
          component={PostEdit}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
