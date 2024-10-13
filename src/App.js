// import './App.css';
// import ChatWindow from './chats/ChatWindow'
// import DashBoardPage from './dashboard/DashboardPage';
// import LoginComponent from './user/LoginComponent';
// import LoginPage from './user/LoginPage';
// import MailPage from './user/MailPage';
// import MailVerifyPage from './user/MailVerifyPage';
// import OtpPage from './user/OtpPage';
// import RegisterPage from './user/RegisterPage';
// import SignupPage from './user/SignUpPage';

// function App() {
//   return (
//     <div className="App">
//       <div className='main'>
//         {/* <SignupPage /> */}
//         {/* <RegisterPage /> */}
//         {/* <MailPage /> */}
//         {/* <MailVerifyPage /> */}
//         {/* <OtpPage /> */}
//         {/* <LoginPage /> */}
//       {/* <ChatWindow /> */}
//       <DashBoardPage />

      
//       </div>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import './styles/main.css';

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
