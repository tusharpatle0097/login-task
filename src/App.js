import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/LoginForm/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './services/ProtectedRoute';
import Routing from './services/Routing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='*' element={<ProtectedRoute />}>
          <Route path='*' element={<Routing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
