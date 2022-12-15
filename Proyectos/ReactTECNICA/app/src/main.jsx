import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'

import App from './App'
import Inicio from './pages/Inicio/Inicio'
import Series from './pages/Series/Series'
import Peliculas from './pages/Peliculas/Peliculas'
import DetallePeliculas from './pages/Detalle/DetallePeliculas'
import DetallesSeries from './pages/Detalle/DetallesSeries'
import Login from './pages/Login/Login'
import FreeTrial from './pages/FreeTrial/FreeTrial'
import CollectionStatment from './pages/CollectionStatment/CollectionStatment'
import Help from './pages/Help/Help'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsConditions from './pages/Terms&Conditions/Terms&Conditions'
import ManageAccount from './pages/ManageAccount/ManageAccount'
import NotFound from './pages/NotFound/404'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
     <Routes>
       <Route path="/" element={<App />}>
        <Route index element={<Inicio />}/>
        <Route path="series" element={<Series />} />
        <Route path="peliculas" element={<Peliculas />} />
        <Route path="peliculas/:titleParam" element={<DetallePeliculas />} />
        <Route path="series/:titleParam" element={<DetallesSeries />} />
        <Route path="login" element={<Login />} />
        <Route path="freeTrial" element={<FreeTrial />} />
        <Route path="collectionStatment" element={<CollectionStatment />} />
        <Route path="help" element={<Help />} />
        <Route path="manageAccount" element={<ManageAccount />} />
        <Route path="privacyPolicy" element={<PrivacyPolicy />} /> 
        <Route path="terms&conditions" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
       </Route> 
     </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
