import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
