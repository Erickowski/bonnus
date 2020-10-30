import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
