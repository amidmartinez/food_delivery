import { Routes,Route } from "react-router-dom"

import Home from './Home'
import Login from './Login'
import Registration from './Registration'
import Restaurants from './Restaurants'
import Menuitem from './Menuitem'
import Orders from './Orders'
import { useState } from "react";

export default function Main(){

    
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState("");


    return(
        <div className="main-container">
            {/* <div>
        <Header   loggedIn={loggedIn}
          username={username}
          setLoggedIn={setLoggedIn}
 
        /> */}
      {/* </div> */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" 
                element={<Login  setLoggedIn={setLoggedIn}
                setUsername={setUsername}
                />}/>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/restaurants" element={<Restaurants />}/>
                <Route path="/restaurants/:restaurantId/menuitems" element={<Menuitem />} />
                <Route path="/orders" element={<Orders />}/>
            </Routes>
        </div>
    )
}