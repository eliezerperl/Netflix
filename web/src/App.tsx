import './App.css';
import CustomRoutes from './utils/CustomRoutes';
import { StoreProvider } from './utils/context/StoreContext';

function App() {
  return (
    <body>
      <StoreProvider>
        <main>
          <CustomRoutes />
        </main>
      </StoreProvider>
    </body>
  );
}

export default App;
