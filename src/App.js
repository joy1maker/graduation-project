
import './App.css';
import OHIFViewer from './pages/viewer/viewer.component';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/mainpage/mainpage.component';
import SchedulePage from './pages/schudle/schudle.component';
import Navgation from './pages/navgation/navgation.component';
import PatientDetails from './pages/patient-details/patient-details.component';
import QuestionsPage from './pages/questions/questions.component';
import SignupPage from './components/signup-continer/signup-container.component'
function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navgation />}>
          <Route index element={<HomePage />} />
          <Route path='/viewer' element={<OHIFViewer />} />
          <Route path='/schedule' element={<SchedulePage />} />
          <Route path='/schedule/patient/*' element={<PatientDetails />} />
          <Route path='/questions' element={<QuestionsPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Route>
      </Routes>
      {/* <OHIFViewer /> */}
    </div>
  );
}
export default App;
