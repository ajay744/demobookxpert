import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import AboutImg from "../assets/11.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";


function Home () {
    return(
     <>
    <Navbar/>
    
    <Hero
     cName="hero"
     heroImg={AboutImg}
     title="bookxpert"
     text="To make you stress free and comfortable to do your 
     business and help you to maximize your return"
     buttonText="get more info"
     url="/"
     btnClass="show"
     />
     <Destination/>
     <Trip/>
     <Footer/>
     </>
    )
}
export default Home;