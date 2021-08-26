import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Courses from './components/Courses'
import Assignment from './components/Assignment'
import Exams from './components/Exams'
import Announcement from './components/Announcement'
import Routine from './components/Routine'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/routine'>
            <Navbar Component={Routine} />
          </Route>
          <Route path='/announcement'>
            <Navbar Component={Announcement} />
          </Route>
          <Route path='/exams'>
            <Navbar Component={Exams} />
          </Route>
          <Route path='/assignment'>
            <Navbar Component={Assignment} />
          </Route>
          <Route path='/courses'>
            <Navbar Component={Courses} />
          </Route>
          <Route path='/'>
            <Navbar Component={Home} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
