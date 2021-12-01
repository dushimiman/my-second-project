import React from "react"
import "./home.css"
import Header from "../components/header" 
import Footer from "../components/footer"
import HomeLayout from "../components/homeLayout"


const Home=()=>{
    return(
        <HomeLayout>
           <div className="home-bg">
               <h1>Rwanda Booking Tours</h1>
               <div className="data-container">
                   <h4>Book Tour With us</h4>
                   <p>Beautiful Rwanda Tours 
                       are well known for their unique
                        and exciting trips in Rwanda
                         and throughout East Africa.</p>
                         <button>
                         <a href="/booking">Book Now</a>   
                         </button>
               </div>


           </div>
           
        </HomeLayout>
    )
}



export default Home;