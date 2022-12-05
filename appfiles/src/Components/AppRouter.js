import '../App.css';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from '../Screens/HomeScreen';
import Registration from '../Screens/RegistrationScreen';
import SignIn from '../Screens/SignInScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/prijava" element={<SignIn />} />
        <Route path="/registracija" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}