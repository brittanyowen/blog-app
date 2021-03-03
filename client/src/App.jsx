import "./App.css";
import PostEdit from "../src/screens/PostEdit/PostEdit";
import { Route, Switch } from "react-router-dom";
import Posts from "./screens/Posts/Posts";
import PostCreate from "../src/screens/PostCreate/PostCreate";
import PostDetails from "../src/screens/PostDetails/PostDetails";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:id" component={PostDetails} />
        <Route exact path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </div>
  );
}

export default App;
