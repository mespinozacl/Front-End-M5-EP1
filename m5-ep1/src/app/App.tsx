import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import {Doctor} from '../objects/Doctor';
import EquipoMedicoPage from './EquipoMedicoPage';
import './App.css';
import {DoctorContext} from '../components/DoctorContext';

function App() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [doctor, setDoctor] = useState<Doctor>({} as unknown as Doctor);
  const [showModalDoctor, setShowModalDoctor] = useState(false);
  return (
    <>
      <Router>
        <DoctorContext.Provider
          value={{
            doctors,
            setDoctors,
            doctor,
            setDoctor,
            showModalDoctor,
            setShowModalDoctor,
          }}
        >
          <div className="app-container">
            <nav>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/equipo-medico">Equipo Médico</Link></li>
                <li><Link to="/citas">Citas</Link></li>
                <li><Link to="/mi-cuenta">Mi Cuenta</Link></li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route path="/equipo-medico" element={<EquipoMedicoPage />} />
          </Routes>
        </DoctorContext.Provider>
      </Router>
      <div id="doctor-modal" />
    </>
  );
}

export default App