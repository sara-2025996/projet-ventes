
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage'
import Dashboard from './pages/dashboard'
import Liste from './pages/ventesList'
import AddVente from './pages/addVente'
import EditeVente from './pages/venteEdite'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}  />
            <Route path='/dashboard' element={<Dashboard/>}  />
            <Route path='/ventes' element={<Liste/>}  />
            <Route path='/ventes/add' element={<AddVente/>}  />
            <Route path='/ventes/mod/:id' element={<EditeVente/>}  />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
