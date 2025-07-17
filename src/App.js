import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './screens/Login';

// Bootstrap dark theme CSS (good 👍)
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
            <Route exact path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
