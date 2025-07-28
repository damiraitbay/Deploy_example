import React from 'react';
import { Navigate } from 'react-router-dom';
function ProtectedRoute({isLogin, children}) {
   return  isLogin ? children : <Navigate to="/login"/>
}

export default ProtectedRoute;
