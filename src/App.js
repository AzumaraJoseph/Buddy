import './App.css';
import ChatWindow from './ChatWindow'
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
        {/* <RegisterPage /> */}
        {/* <MailPage /> */}
        {/* <MailVerifyPage /> */}
        <OtpPage />
      {/* <ChatWindow /> */}
      
      </div>
    </div>
  );
}

export default App;
