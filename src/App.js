import './App.css';
import './styles/output.css'
import {Switch, Route} from 'react-router-dom'
import {Login, Products, Cart} from './pages'
import {NavBar, PageTitle} from './components'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <PageTitle page={'Home'} />
        </Route>
        <Route exact path="/brand">
          <PageTitle page={'Brand'} />
        </Route>
        <Route exact path="/kahf-program">
          <PageTitle page={'Kahf Program'} />
        </Route>
        <Route exact path="/discovery">
          <PageTitle page={'Discovery'} />
        </Route>
        <Route exact path="/my-account">
          <Login />
        </Route>
        <Route exact path="/kahf-shop">
          <Products />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
