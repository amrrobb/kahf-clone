import './App.css';
import './styles/output.css'
import {Switch, Route} from 'react-router-dom'
import {Login, Products, Cart} from './pages'
import {NavBar} from './components'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
      <Route exact path="/my-account">
        <Login />
      </Route>
      <Route path="/kahf-shop">
        <Products />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
    </Switch>
    </>
  );
}

export default App;
