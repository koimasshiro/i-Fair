import './App.css';
import AnimatedRoutes from './Components/AnimatedRoutes/AnimatedRoutes';
import {BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatedRoutes/>
      </Router>      
    </div>
  );
}

export default App;
