import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { CreateUser, UpdateUser, ViewUsers } from "./components";
import { loadUsers } from "./redux/actions";

const MainComponent = () => {
  return <div style={{ textAlign: "center" }}>Hello</div>;
};

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  return (
    <Router>
      <header className="App-header">
        <Link to="/create users">Create User</Link>
        <Link to="/update users">Update User</Link>
        <Link to="/view users">View Users</Link>
      </header>
      <Switch>
        <Route exact path="/create users" component={CreateUser} />
        <Route exact path="/update users" component={UpdateUser} />
        <Route exact path="/view users" component={ViewUsers} />
        <Route path="/" component={MainComponent} />
      </Switch>
    </Router>
  );
}

export default App;
