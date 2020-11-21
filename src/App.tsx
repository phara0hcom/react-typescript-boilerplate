import { Route, Switch } from 'react-router-dom';
import Home from './container/Home';
import Other from './container/Other';

const App: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/other">
          <Other />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
