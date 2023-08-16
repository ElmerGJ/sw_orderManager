import './App.css';
import BottomMenu from './components/Nav/BottomMenu';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Deliveries from './pages/Deliveries';
import Requests from './pages/Requests';
import Stats from './pages/Stats';
import Settings from './pages/Settings';


function App() {
  return (  
      <div>
          <Router>
              <div>
              <Routes>
                  <Route path="/deliveries" element={<Deliveries/>}/>
                  <Route path='/requests' element={<Requests/>}/>
                  <Route path='/stats' element={<Stats/>}/>
                  <Route path='/settings' element={<Settings/>}/>
              </Routes>
            </div>
            <BottomMenu />
          </Router>
      </div>
  );
}

export default App;
