import "./App.css";
import { Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts/Posts";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:id">
          PostDetails
        </Route>
        <Route path="/add-post">PostCreate</Route>
        <Route exact path="/posts/:id/edit">
          PostEdit
        </Route>
      </Switch>
    </div>
  );
}

export default App;
