import { BrowserRouter, Routes, Route } from './imports';
import Register from '@/pages/register/Register';
import Login from '../pages/login/Login';
import Browse from '@/pages/browse/Browse';

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
