import './App.css';
import CustomerList from './components/CustomerList';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailCustomer from './components/DetailCustomer';
import { Route, Routes } from "react-router-dom";
import EditCustomer from './components/EditCustomer';
import CreateCustomerContainer from './components/CreateCustomerContainer';
import CustomerContainer from './components/CustomerContainer';
import Mypage from './components/Mypage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<CustomerContainer/>} />
        <Route path="/detailview/:no" element={<DetailCustomer/>} />
        <Route path="/editcustomer/:no" element={<EditCustomer/>} />
        <Route path="/write" element={<CreateCustomerContainer/>} />
        <Route path="/imgimg" element={<Mypage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
