
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/mainpage/mainpage.component';
import SchedulePage from './pages/schudle/schudle.component';
import Navgation from './pages/navgation/navgation.component';
import PatientDetails from './pages/patient-details/patient-details.component';
import QuestionsPage from './pages/questions/questions.component';
import SignupPage from './components/signup-continer/signup-container.component'
import { ReactQueryDevtools } from 'react-query/devtools';
import ProfilePage from './pages/profile/profile-page.component';
import React from 'react';
import { AnimatePresence } from 'framer-motion'
import ViewerTemp from './pages/viewer/viewer-temp.component';
import DeleteReservationsPage from './pages/delete-reservations/delete-reservations.component';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Navgation />}>
            <Route index element={<HomePage />} />
            <Route path='/viewer' element={<ViewerTemp />} />
            <Route path='/schedule' element={<SchedulePage />} />
            <Route path='/schedule/patient/*' element={<PatientDetails />} />
            <Route path='/questions' element={<QuestionsPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/myprofile' element={<ProfilePage />} />
            <Route path='/delete-reservation' element={<DeleteReservationsPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </div>
  );
}
export default App;

