import { BrowserRouter as Router, Route } from "react-router-dom";
//redux config
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import {
  ThemeProvider,
  createMuiTheme,
  makeStyles,
} from "@material-ui/core/styles";

import "react-toastify/dist/ReactToastify.css";

import rootReducer from "./redux/index";

import routes from "./config/route";
import "./assets/styles/global/styles.scss";

const theme = createMuiTheme();

const useStyles = makeStyles((theme) => {
  root: {
    // some css that access to theme
  }
});

const store = createStore(rootReducer);

function App() {
  return (
    <ThemeProvider theme={theme}>
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
        <ToastContainer />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
