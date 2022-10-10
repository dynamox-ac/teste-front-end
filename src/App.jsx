import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Login from "./pages/Login";
import Products from "./pages/Products";
import NewProducts from "./pages/NewProducts";
import EditProducts from "./pages/EditProducts";
import DeleteProducts from "./pages/DeleteProducts";
import { checkToken } from "./state/auth";
import NavButton from "./components/NavButton";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./state/userSlice";
import { useEffect, useState } from "react";
import { login, logout } from "./state/userSlice";

const App = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch() 

  useEffect(() => {
    if (!!localStorage.getItem("auth")) {
      dispatch(login({
        email: JSON.parse(localStorage.getItem("auth")).email,
        token: JSON.parse(localStorage.getItem("auth")).token,
        loggedIn: true
      }))
    }
  }, [])

  return (
    <>
      {user.loggedIn ?
        <>
          <Header />
          <NavButton />
        </>
        : ""}
      <Routes>
        {
          user.loggedIn ?
            <>
              <Route exact path='/' element={<Products />} />
              <Route path='/new' element={<NewProducts />} />
              <Route path='/edit' element={<EditProducts />} />
              <Route path='/delete' element={<DeleteProducts />} />
            </>
            :
            <Route exact path='/' element={<Login />} />
        }
      </Routes>
    </>
  );
}

export default App;
