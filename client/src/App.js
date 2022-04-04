import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/welcome/Welcome';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import { UserContext } from './UsedataProvider';
import React, { useState } from 'react';

import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFond'
import Contact from './pages/Contact/Contact';
import Dashbord from './pages/Dashbord/Dashbord';
import AddRestaurant from './pages/Dashbord/AdminDashbord/AddRestaurant';
import EditRestaurant from './pages/Dashbord/AdminDashbord/EditRsetaurant';
import AddFood from './pages/Dashbord/RestaurantDashbord/AddFood';
import EditFood from './pages/Dashbord/RestaurantDashbord/EditFood';
import RestaurantDitals from './pages/RestaurantDitals/RestaurantDitals';

function App() {
   const [ user, setUser ] = useState({loggedIn: false });
  const value = { user, setUser };
  return (
      <UserContext.Provider value={value}>
    <div className='container'>
      <BrowserRouter>
      <Header/>
                <div className="layout">
                    <Routes>
                        <Route path="/" element={ <Welcome/> }></Route>
                        <Route path="/login/user" element={ <Login/> }></Route>
                        <Route path="/registre/user" element={ <Register/> }></Route>
                        <Route path="/about" element={ <About/>  }></Route>
                        <Route path="/contact" element={ <Contact/>  }></Route>
                        <Route path="/login/user/dashbord" element={ <Dashbord/> }></Route>
                        <Route path="/login/user/addrestaurnt" element={ <AddRestaurant/> }></Route>
                        <Route path="/login/user/editrestaurnt/:id" element={ <EditRestaurant/> }></Route>
                        <Route path="/login/user/dashbord/addfood" element={ <AddFood/> }></Route>
                        <Route path="/login/user/dashbord/editfood/:id" element={ <EditFood/> }></Route>
                        <Route path="/welcom/restaurantinfo/:id" element={ <RestaurantDitals/> }></Route>
                        <Route path="*" element={ <NotFound/> }></Route>
                    </Routes>
                </div>
            </BrowserRouter>
    </div>
      </UserContext.Provider>
  );
}

export default App;
