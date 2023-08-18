
import './App.css';
import {BrowserRouter ,Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Details from './pages/Details';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/create' element={<CreateUser/>}/>
      <Route path='/edit/:id' element={<EditUser/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
