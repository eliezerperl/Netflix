import { BrowserRouter, Routes, Route } from './imports';
import Register from '@/pages/register/Register';
import Login from '../pages/login/Login';
import Browse from '@/pages/browse/Browse';
import SeriesPage from '@/pages/browse/series/SeriesPage';
import RegisterForm from '@/pages/register/RegisterForm';
import FilmsPage from '@/pages/browse/films/FilmsPage';
import MyListPage from '@/pages/browse/myList/MyListPage';
import BrowseContentPage from '@/pages/browse/content/BrowseContentPage';

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<RegisterForm />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/browse/:title" element={<BrowseContentPage />}></Route>
        <Route path="/browse/series" element={<SeriesPage />}></Route>
        <Route path="/browse/films" element={<FilmsPage />}></Route>
        <Route path="/browse/my-list" element={<MyListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
