import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Home/>
      </UserContextProvider>
    </div>
  );
}

export default App;
