import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import ARPage from "./components/ARPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ar" element={<ARPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
