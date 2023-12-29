import './App.css'
import { Routes, Route } from 'react-router-dom';

import HomePage from './screens/HomePage'
import Login from "./components/login/Login"
import SideTabAdmin from "./components/vertical_tabs/SideTabAdmin"
import SideTabCommunity from "./components/vertical_tabs/SideTabCommunity"
import Footer from './components/footer/Footer';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/sign_in' element={<Login />} />
      <Route path='/admin_space' element={<SideTabAdmin />} />
      <Route path='/members_space' element={<SideTabCommunity />} />
      {/* <Route path='/test' element={<Footer />} /> */}
    </Routes>
  )
}

export default App
