import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="rega_laurent_12_sport-see_220322/:id" element ={<Home />} />
          <Route path="/*" element = { <Navigate replace to='rega_laurent_12_sport-see_220322/12' /> } />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
