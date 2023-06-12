import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import UseReducer from './hooks/UseReducer';
import UseState from './hooks/UseState';


function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      
        <Route path="/usereducer" element={<UseReducer/>}/>
        <Route path="/usestate" element={<UseState/>}/>
        
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
