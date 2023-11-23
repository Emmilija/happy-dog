import HomePage from "./pages/HomePage";
import Bath from './pages/Bath'
import Hotel from "./pages/Hotel";
// import GetDog from "./pages/GetDog";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter >
    <Routes>
<Route path="/" element={<HomePage />} />
<Route path="bath" element={<Bath />} />
<Route path="hotel" element={<Hotel />} />
{/* <Route path="getdog" element={<GetDog />} /> */}

  
    </Routes>
    </BrowserRouter >
  );
}

export default App;
