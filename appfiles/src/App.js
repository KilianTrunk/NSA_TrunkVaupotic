import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeScreen from './Screens/HomeScreen';
import AppRouter from './Components/AppRouter';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}