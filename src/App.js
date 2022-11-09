import './App.css';
import Header from "./Header"
import Info from './Info'
import Functionalities from './Functionalities'
import WithdrawPage from './pages/WithdrawPage';
import DepositPage from './pages/DepositPage';
import TransferPage from './pages/TransferPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <LoginPage />
        {/* <Info />
        <Functionalities /> */}
      </div>
        
    </div>
  )
}

export default App;
