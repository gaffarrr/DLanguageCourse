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


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Body></Body>}></Route>
          <Route path='/YourClasses' element={<ClassList></ClassList>}></Route>
          <Route path='/Languages' element={<LanguageClass></LanguageClass>}></Route>
          <Route path='/Course' element={<Course></Course>}></Route>
          <Route path='InvoiceList' element={<InvoiceList></InvoiceList>}></Route>
          <Route path='InvoiceDetail' element={<InvoiceDetail></InvoiceDetail>}></Route>
          <Route path='/EmailConfirmation' element={<EmailConfirmation></EmailConfirmation>}></Route>
          <Route path='/InvoiceConfirmation' element={<InvoiceConfirmation></InvoiceConfirmation>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/*<Route path='/login' element={<Login/>}></Rout1e> **/}
          {/*<Route path='/cart' element={<Cart/>}></Route> **/}
          {/**<Route path='/transaction' element={<Transaction/>}></Route> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
