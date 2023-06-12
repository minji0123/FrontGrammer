import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import UseReducer from './hooks/UseReducer';
import UseState from './hooks/UseState';
import Async from './jscode/AsyncCode';


function App() {
  return (
  <>
  <BrowserRouter>
    <Routes>
      
      {/* react-hooks */}
        <Route path="/usereducer" element={<UseReducer/>}/>
        <Route path="/usestate" element={<UseState/>}/>
        
        {/* js */}
        <Route path='/async' element={<Async/>}/>
      </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
