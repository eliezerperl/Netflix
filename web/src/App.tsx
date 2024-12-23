import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StoreProvider } from './utils/context/StoreContext';
import { HelmetProvider } from 'react-helmet-async';
import CustomRoutes from './utils/CustomRoutes';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Analytics />

      <HelmetProvider>
        <StoreProvider>
          <ToastContainer position="top-right" />
          <main className="w-full h-screen relative overflow-x-hidden">
            <CustomRoutes />
          </main>
        </StoreProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
