import { Routes, Route } from 'react-router-dom';
import Signup from '../user/SignUpPage';
import Register from '../user/RegisterPage';
import Mail from '../user/MailPage';
import VerifyMail from '../user/MailVerifyPage';
import OTP from '../user/OtpPage';
import Login from '../user/LoginPage';
import Dashboard from '../dashboard/DashboardPage';
import ChatWindow from '../chats/ChatWindow';
import PublicRoute from '../routes/PublicRoutes';
import MainComponent from '../dashboard/MainComponent';
import Layout from '../routes/Layout';

const AppRoutes = () => {
  return (
    <Routes>
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

      {/* Layout Route */}
      <Route path="/" element={<Layout />}>
          
          <Route path="main" element={<MainComponent />} /> 
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chatwindow" element={<ChatWindow />} />
          
        </Route>


    </Routes>
  );
};

export default AppRoutes;
