import "./App.css";

import FormEdit from "./form/FormEdit";
import { Route, Redirect, Switch } from "react-router-dom";

import UserCard from "./component/UserCard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/FormEdit/:id">
          <FormEdit />
        </Route>
        <Route path="/FormEdit/">
          <Redirect to="/UserCard" />
        </Route>
        <Route path="/">
          <UserCard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
