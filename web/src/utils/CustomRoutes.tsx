import Register from '@/pages/register/Register';
import Login from '../pages/login/Login';
import { BrowserRouter, Routes, Route } from './imports';

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
