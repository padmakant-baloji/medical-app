import { BrowserRouter as Router, Route } from "react-router-dom";
//redux config
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./redux/index";

import routes from "./config/route";
import "./assets/styles/global/styles.scss";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.comp}
          />
        ))}
      </Router>
    </Provider>
  );
}

export default App;
