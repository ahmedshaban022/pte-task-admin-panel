import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AddUsers from './Components/AddUsers';
import DisplayUsers from './Components/DisplayUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {

  
  return (
    <div >
     <BrowserRouter>
     <Provider store={store}>

     <Navbar/>
     <Routes>
    <Route path='pte-task-admin-panel/' exact element={ <DisplayUsers/>}/>
    <Route path='pte-task-admin-panel/add-new-user' exact element={<AddUsers/>}/>
    <Route path='pte-task-admin-panel/*' exact element={<h1 className='container text-muted m-5'>Error.. 404 .Not Found </h1>}/>
     
   
     </Routes>    
     </Provider>
     </BrowserRouter>
     <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </div>
  );
}

export default App;
