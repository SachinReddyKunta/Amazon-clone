import './App.css';
import { BrowserRouter , Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import Header from './Components/Header.jsx';
import Checkout from './Components/Checkout';
function App() {
  return (
    <BrowserRouter>
       <div className="app">
          <Switch>

            <Route path='/checkout'>
              <Header />
              <Checkout />
            </Route>

            <Route path='/login'>
              <h1>Login</h1>
            </Route>

            <Route path='/'>
              <Header />
              <Home />
            </Route>

          </Switch>
        </div>
    </BrowserRouter>
   
  );
}

export default App;
