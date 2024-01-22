
import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { NavBar} from "./navBar";
import { Login } from "./login/login";
import { SearchProduct } from "./searchProduct";
import { CreateProduct } from "./createProduct";

const App: React.FC = () => {
  return (
    <div>
      <Outlet/>
      <h1>boo is awesome</h1>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/search_product" element={<SearchProduct/>}/>
        <Route path="/create_product" element={<CreateProduct/>}/>
      </Routes>
    </div>
  )

};

export default App;