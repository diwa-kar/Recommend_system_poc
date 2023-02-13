import logo from './logo.svg';
import './App.css';
// import 'antd/dist/antd.css';

// importing jsx components
import Login from './components/Login';
import DummyPage from './components/DummyPage';
import Register from './components/Register';

// importing external ui
import { NextUIProvider } from '@nextui-org/react';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from './components/User_context';


function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <BrowserRouter>
          <div>
            <UserProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dum" element={<DummyPage />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </UserProvider>
          </div>
        </BrowserRouter>
      </NextUIProvider>
    </div>
  );
}

export default App;
