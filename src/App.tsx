import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cadastro from './pages/Cadastro'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App