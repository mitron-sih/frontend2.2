import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Donate from "./pages/Donation"
import Scheme from './pages/Scheme'
import Volunteer from "./pages/Volunteer";
import Profile from "./pages/Profile";
import Donation from './pages/Donate'
import Aids from './pages/AssistiveAids'

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/donate" element={<Donate/>}/>
      <Route path="/scheme" element={<Scheme/>}/>
      <Route path="/volunteer" element={<Volunteer/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/aid" element={<Aids/>}/>
      <Route path="/donation" element={<Donation/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
