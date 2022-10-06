import logo from './logo.svg';
import './App.css';
import Table from './Table';
import {Route,Switch} from "react-router-dom";
import Click from './Click';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Click}>
        </Route>
        <Route path='/Table' component={Table}>
          <Table/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
