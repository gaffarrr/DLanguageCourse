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
import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Body></Body>}></Route>
          <Route path='/Languages' element={<LanguageClass></LanguageClass>}></Route>
          <Route path='/Course' element={<Course></Course>}></Route>
          <Route path='/EmailConfirmation' element={<EmailConfirmation></EmailConfirmation>}></Route>
          <Route path='/InvoiceConfirmation' element={<InvoiceConfirmation></InvoiceConfirmation>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
