
import './App.css';
import OHIFViewer from './pages/viewer/viewer.component';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/mainpage/mainpage.component';
import SchedulePage from './pages/schudle/schudle.component';
import Navgation from './pages/navgation/navgation.component';
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navgation />}>
          <Route index element={<HomePage />} />
          <Route path='/viewer' element={<OHIFViewer />} />
          <Route path='/schedule' element={<SchedulePage />} />
        </Route>
      </Routes>
      {/* <OHIFViewer /> */}
    </div>
  );
}
export default App;
