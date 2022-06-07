import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Immobile from "./pages/flat/immobile/Immobile";
import List from "./pages/flat/list/List";
import Login from "./pages/user/login/Login";
import Step1 from "./pages/user/register/step1/Step1";
import Step2 from "./pages/user/register/step2/Step2";
import Step3 from "./pages/user/register/step3/Step3";
import Profile from "./pages/user/profile/Profile";
import Forgot from "./pages/user/forgot/Forgot"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Immobiles" element={<List />} />
        <Route path="/Immobile:id" element={<Immobile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Step1" element={<Step1 />} />
        <Route path="/Step2" element={<Step2 />} />
        <Route path="/Step3" element={<Step3 />} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
