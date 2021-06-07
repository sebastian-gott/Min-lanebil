import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Registrer from './components/Registrer'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'

function App() {
  return (
    <AuthContext>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Logginn" component={Login} />
          <Route path="/Registrer" component={Registrer} />
        </Switch>

      </header>
    </div>
    </BrowserRouter>
    </AuthContext>
  );
}

export default App;
