// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignupPage from '../user/SignUpPage';
// import RegisterPage from '../user/RegisterPage';
// import MailPage from '../user/MailPage';
// import MailVerifyPage from '../user/MailVerifyPage';
// import OtpPage from '../user/OtpPage';
// import LoginPage from '../user/LoginPage';
// import DashboardPage from '../dashboard/DashboardPage';
// import ChatWindow from '../chats/ChatWindow';
// import PrivateRoute from '../routes/PrivateRoutes';
// import PublicRoute from '../routes/PublicRoutes';

// const AppRoutes = () => {
//     return (
//         <Router>
//             <Routes>
//                 {/* Public Routes */}
//                 <PublicRoute path="/signup" component={SignupPage} />
//                 <PublicRoute path="/register" component={RegisterPage} />
//                 <PublicRoute path="/mail" component={MailPage} />
//                 <PublicRoute path="/verify" component={MailVerifyPage} />
//                 <PublicRoute path="/otp" component={OtpPage} />
//                 <PublicRoute path="/login" component={LoginPage} />

//                 {/* Private Routes */}
//                 <PrivateRoute path="/dashboard" component={DashboardPage} />
//                 <PrivateRoute path="/chatwindow" component={ChatWindow} />

//                 {/* Redirect or Not Found Handling */}
//                 <Route path="/" exact component={SignupPage} />
//                 <Route render={() => <h1>404: Page Not Found</h1>} />
//             </Routes>
//         </Router>
//     );
// };

// export default AppRoutes;



import { Routes, Route } from 'react-router-dom';
// import Signup from '../pages/Signup';
// import Register from '../pages/Register';
// import Mail from '../pages/Mail';
// import VerifyMail from '../pages/VerifyMail';
// import OTP from '../pages/OTP';
// import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
// import ChatWindow from '../pages/ChatWindow';
// import PublicRoute from './PublicRoute';
import Signup from '../user/SignUpPage';
import Register from '../user/RegisterPage';
import Mail from '../user/MailPage';
import VerifyMail from '../user/MailVerifyPage';
import OTP from '../user/OtpPage';
import Login from '../user/LoginPage';
import Dashboard from '../dashboard/DashboardPage';
import ChatWindow from '../chats/ChatWindow';
// import PrivateRoute from '../routes/PrivateRoutes';
import PublicRoute from '../routes/PublicRoutes';
import MainComponent from '../dashboard/MainComponent';
import Layout from '../routes/Layout';

const AppRoutes = () => {
  return (
    <Routes>

        {/* Routes without Sidebar (or different layouts) */}
        {/* <Route path="signup" element={<Signup />} />
        <Route path="register" element={<Register />} />
        <Route path="mail" element={<Mail />} />
        <Route path="verify-mail" element={<VerifyMail />} />
        <Route path="otp" element={<OTP />} />
        <Route path="login" element={<Login />} /> */}
        <Route
        path="/"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route
        path="/mail"
        element={
          <PublicRoute>
            <Mail />
          </PublicRoute>
        }
      />
      <Route
        path="/otp"
        element={
          <PublicRoute>
            <OTP />
          </PublicRoute>
        }
      />
      <Route
        path="/verify-mail"
        element={
          <PublicRoute>
            <VerifyMail />
          </PublicRoute>
        }
      />
      
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />




      {/* <Route
        path="/dashboard"
        element={<Dashboard />}
      /> */}

      {/* <Route
        path="/main"
        element={<MainComponent />}
      /> */}

      {/* <Route
        path="/chatwindow"
        element={<ChatWindow />}
      /> */}

      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
          <Route index element={<MainComponent />} /> Default view
          <Route path="main" element={<MainComponent />} /> {/* Add this */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chatwindow" element={<ChatWindow />} />
          {/* Add any other routes you want under the Layout */}
        </Route>


    </Routes>
  );
};

export default AppRoutes;
