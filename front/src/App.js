import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import {useEffect} from "react";
import HomeAdmin from "./components/Admin/AdminHome";
import AdminItemForm from "./components/Admin/AdminItemForm";
import AdminItemList from "./components/Admin/AdminItemList";
import AdminUpdateItem from "./components/Admin/AdminUpdateItem";
import ContactList from "./components/Admin/ContactList";

function App() {
    // useEffect(() => {
    //     // console.log("hi1")
    // }, []);
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/admin" element={<HomeAdmin/>}/>
        <Route exact path="/adminItemAdd" element={<AdminItemForm/>}/>
        <Route exact path="/adminItemList" element={<AdminItemList/>}/>
        <Route exact path="/adminContactList" element={<ContactList/>}/>
        <Route exact path="/adminItemUpdate/:id" element={<AdminUpdateItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
