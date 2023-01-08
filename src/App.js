import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router,Switch,Route ,Routes } from 'react-router-dom';
import Contactus from './pages/Contactus/Contactus';
import { createBrowserHistory } from "history";
function App() {
  const history = createBrowserHistory();
  const getRouteComponent = (Component)=>{

    return <Component/>
}

  return (
    <div className="App">
      <Router history={history}>
      <Navbar/>
      {/* <Dashboard/> */}
      <Routes>
            <Route path='/'  element={<Dashboard/>} />
            <Route path='/ContactUs'   element={<Contactus/>} />
            <Route path='/pages'   element={<Contactus/>} />

          </Routes>
      </Router>
    </div>
  );
}

export default App;
