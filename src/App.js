

import './App.css';
import Home from './screens/Home';
import { BrowserRouter,
  Routes,
  Route,
} from "react-router";
import Login from './screens/Login';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route exact path="/" element={<Home/>}> </Route>
      <Route exact path="/login" element={<Login/>}></Route>
      </Routes>

    </div>
    
    
    </BrowserRouter>
    
  );
}

export default App;
