import logo from "./logo.svg";
import "./App.css";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header";



function App() {
  return (
    <>
    <Header />
      <Outlet />
  
    </>
  );
}

export default App;
