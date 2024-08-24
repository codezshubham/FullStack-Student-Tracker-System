import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddUser from './Users/AddUser';
import EditUser from './Users/EditUser';
import ViewUser from './Users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/edituser/:id' element={<EditUser/>}/>
            <Route path='/viewuser/:id' element={<ViewUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
