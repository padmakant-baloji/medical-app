import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import rootReducer from "./redux/index";
import routes from "./config/route";
import "./assets/styles/global/styles.scss";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Router basename="/medical-app">
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.comp}
          />
        ))}
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
