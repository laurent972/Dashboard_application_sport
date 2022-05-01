import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path="rega_laurent_12_sport-see_220322/:id" element ={<Home />} />
          {/* <Route path="/*" element = { <Navigate replace to='rega_laurent_12_sport-see_220322/12' /> } /> */}
          <Route path="/*" element ={<NotFound />}  />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
