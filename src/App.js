
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/SignIn';
import UploadCSV from './component/UploadCSV';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/UploadCSV' element={<UploadCSV/>}/>
      </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
