import './App.css';
import CustomRoutes from './utils/CustomRoutes';
import { StoreProvider } from './utils/context/StoreContext';

function App() {
  return (
    <>
      <StoreProvider>
        <main>
          <CustomRoutes />
        </main>
      </StoreProvider>
    </>
  );
}

export default App;
