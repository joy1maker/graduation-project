import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ReservationProvider } from './contexts/reservations.context';
import { DoctorProvider } from './contexts/doctor.context'
import { QuestionsProvider } from './contexts/questions.context';
import { QueryProvider } from './react-query/RQ';
import { DepartmentProvider } from './contexts/department.context';
import { ViewerProvider } from './contexts/viewer.context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryProvider>
        <ViewerProvider>
          <DepartmentProvider>
            <DoctorProvider>
              <QuestionsProvider>
                <ReservationProvider>
                  <App />
                </ReservationProvider>
              </QuestionsProvider>
            </DoctorProvider>
          </DepartmentProvider>
        </ViewerProvider>
      </QueryProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
