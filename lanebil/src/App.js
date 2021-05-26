import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
