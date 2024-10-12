import './App.css';
import ChatWindow from './ChatWindow'
import LoginComponent from './user/LoginComponent';
import LoginPage from './user/LoginPage';
import MailPage from './user/MailPage';
import MailVerifyPage from './user/MailVerifyPage';
import OtpPage from './user/OtpPage';
import RegisterPage from './user/RegisterPage';
import SignupPage from './user/SignUpPage';

function App() {
  return (
    <div className="App">
      <div className='main'>
        {/* <SignupPage /> */}
        <RegisterPage />
        {/* <MailPage /> */}
        {/* <MailVerifyPage /> */}
        {/* <OtpPage /> */}
        <LoginPage />
      {/* <ChatWindow /> */}
      
      </div>
    </div>
  );
}

export default App;
