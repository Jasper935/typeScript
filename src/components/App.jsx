import { Route, Routes } from 'react-router-dom';
import { Navigation } from 'pages/Navigation';
import { Contacts } from '../pages/contacts';
import { Registration } from 'pages/Registration';
import { LogIn } from 'pages/LogIn';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { NotFound } from 'pages/NotFound';

export const App = () => {
 
 
  return (
    <>
      <Navigation />
      <Routes>
        <Route  path="/" element={<Registration />} />
        <Route index path="/login" element={<LogIn />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
     
    </>
  );
};
