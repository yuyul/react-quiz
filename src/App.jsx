import logo from './assets/quiz.svg'
import Home from './pages/Home'
import Ranking from './pages/Ranking/index'
import Play from './pages/Play'
import { Link, Route, Switch } from "wouter";
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div> */}
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/play" component={Play} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
      {/* </div> */}
    </div>
  )
}

export default App
