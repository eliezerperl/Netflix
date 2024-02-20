import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from './utils/context/StoreContext';
import CustomRoutes from './utils/CustomRoutes';

function App() {
  return (
    <>
      <StoreProvider>
        <ToastContainer position="top-right" />
        <main className="w-full h-screen relative overflow-x-hidden">
          <CustomRoutes />
        </main>
      </StoreProvider>
    </>
  );
}

export default App;
