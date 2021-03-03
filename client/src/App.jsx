import "./App.css";
import PostEdit from "../src/screens/PostEdit/PostEdit"
import { Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts/Posts";
import PostCreate from "../src/screens/PostCreate/PostCreate"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:id">
          PostDetails
        </Route>
        <Route path="/add-post">PostCreate</Route>
        component={PostCreate}
        <Route exact path="/posts/:id/edit">
          component={PostEdit}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
