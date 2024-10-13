// import React from 'react';
// import { Route, Navigate  } from 'react-router-dom';
// import useAuth from '../Auth/UseAuth';

// const PublicRoute = ({ component: Component, ...rest }) => {
//     const { isAuthenticated } = useAuth();

//     return (
//         <Route
//             {...rest}
//             render={(props) =>
//                 !isAuthenticated ? <Component {...props} /> : <Navigate  to="/dashboard" />
//             }
//         />
//     );
// };

// export default PublicRoute;



import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const isAuthenticated = false; // Change this based on your authentication logic

  return !isAuthenticated ? children : <Navigate to="/dashboard" />;
};

export default PublicRoute;
