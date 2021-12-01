import React from "react" 
import Home from "../views/home";
// import Booking from "../views/booking";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import{
    Routes, Route
}
from "react-router-dom";
import Aboutus from "../views/Aboutus";
import Garelly from "../views/Garelly";
import Booking from "../views/booking";
import  Reseach from "../views/reseach" ;
import  Contact from "../views/contact" ;
import  Submit from "../views/submit" ;
import Tourview from "../views/tour";
import SignIn from "../views/SignIn";
import AllTours from '../views/Dashboard/allTours'
import DashLayout from '../components/dashboardLayout'
import NewTourView from '../views/Dashboard/NewTour'
const isUserLogedIn = localStorage.getItem("userLogedIn");
const Index=()=>{
return(
    <>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/garelly' element={<Garelly/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/reseach' element={<Reseach/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/submit' element={<Submit/>}/>
        <Route path='/tour' element={<Tourview/>}/>

        
        
    </Routes>
    {
        isUserLogedIn?(
            <DashLayout>
                <Routes>
                    <Route path="/dash/NewTour" element={<NewTourView />}></Route>
                    <Route path="/dash/allTours" element={< AllTours />}></Route>
                </Routes>

            </DashLayout>  )
       :(<>you are not allowed</>)
        }
        </>
)

} 


export default Index