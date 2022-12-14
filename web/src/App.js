import logo from './logo.svg';
import './App.css';
import Header from './Component/header/Header'
import Footer from './Component/footer/Footer';
import Body from './Component/body/Body';
import LanguageClass from './Component/language/LanguageClass';
import Course from './Component/course/Course';
import EmailConfirmation from './Component/confirmation/EmailConfirmation';
import InvoiceConfirmation from './Component/confirmation/InvoiceConfirmation';
import Register from './Component/register/Register';
import ClassList from './Component/classlist/ClassList';
import InvoiceList from './Component/invoice/InvoiceList';
import InvoiceDetail from './Component/invoice/InvoiceDetail';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Component/login/Login';
import Checkout from './Component/checkout/Checkout';
import ForgotPassword from './Component/forgotPassword/ForgotPassword';
import ResetPassword from './Component/resetPassword/ResetPassword';
import LandingPage from './Component/landingPage/LandingPage';
import LanguagePage from './Component/language/LanguagePage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/YourClasses' element={<ClassList></ClassList>}></Route>
          <Route path='/Languages/:id' element={<LanguagePage />}></Route>
          <Route path='/languages/:langid/Course/:id' element={<Course></Course>}></Route>
          <Route path='/InvoiceList' element={<InvoiceList></InvoiceList>}></Route>
          <Route path='/InvoiceDetail' element={<InvoiceDetail></InvoiceDetail>}></Route>
          <Route path='/EmailConfirmation' element={<EmailConfirmation></EmailConfirmation>}></Route>
          <Route path='/InvoiceConfirmation' element={<InvoiceConfirmation></InvoiceConfirmation>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/forgotPassword' element={<ForgotPassword />}></Route>
          <Route path='/forgotPassword/resetpassword' element={<ResetPassword />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
