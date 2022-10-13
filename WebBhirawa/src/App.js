import logo from './logo.svg';
import './App.css';
import LanguageClass from './Components/LanguageClass';
import Course from './Components/Course';
import  EmailConfirmation  from './Components/EmailConfirmation';
import InvoiceConfirmation from './Components/InvoiceConfirmation'
import {Route,Routes,BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/Languages' element={<LanguageClass></LanguageClass>}></Route>
          <Route path='/Course' element={<Course></Course>}></Route>
          <Route path='/EmailConfirmation' element={<EmailConfirmation></EmailConfirmation>}></Route>
          <Route path='/InvoiceConfirmation' element={<InvoiceConfirmation></InvoiceConfirmation>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
