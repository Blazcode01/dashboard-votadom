import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Colegio from "./pages/admin/Colegio";
import Error404 from "./pages/Error404";


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<LayoutAuth />}> 
            <Route index element={<Login />}/>
            <Route path="olvide-password" element={<ForgetPassword />}/>
            <Route path="registro" element={<Register />}/>
          </Route> 
          <Route path="/" element={<LayoutAdmin />}>
            <Route index element={<Home />} />
            <Route path="Colegio" element={<Colegio/>} />
          </Route>
          <Route path="*" element={<Error404/>}/>
        </Routes>
    </BrowserRouter>
  ); 
}

export default App;
