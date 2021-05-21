import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import routes from './config/route';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
      {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
          >
            <route.comp />
          </Route>
        ))}
    </Router>
    </div>
  );
}

export default App;
