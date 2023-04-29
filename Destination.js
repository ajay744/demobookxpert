import mountain1 from "../assets/1.jpg";
import mountain2 from "../assets/2.jpg";
import mountain3 from "../assets/3.jpg";
import mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination =() =>{
    return(
           <div className="destination">
            <h1>BOOKXPERT</h1>
            <p>
            To make you free and comfortable to do your business and help you to maximize your returns" 
            </p>

                 <DestinationData
                 className="first-des"
                 
                 heading="Bookxpert"
                 text="
                 The business is led by a group of professionals from different
                 fields and backgrounds who have the functional and technological 
                 experience. We're here to help MSMEs overcome their accounting and 
                 enforcement issues under different laws of the countr As per our Research,
                 we found out that Large Number of MSMEs are incurring Huge Losses and are 
                 struggling daily to fulfill their accounting and enforcements needs due to
                 Constraints with respect to their Location, Lack of Fully Trained People
                 to execute their Accounting Works, Cost Overruns to Fulfill all enforcement
                 needs, and Poor Quality of Services provided by existing lot. To solve these Problems,
                 our team is committed to develop creative and 
                 cost-effective real-time customized solutions catering to your needs."

                 img1={mountain1}
                 img2={mountain2}
                 
                 />

                <DestinationData
                
                className="first-des-reverse"
                 
                 heading="Bookxpert"
                 text="
                 The business is led by a group of professionals from different
                  fields and backgrounds who have the functional and technological experience. 
                  We're here to help MSMEs overcome their accounting and enforcement 
                 issues under different laws of the countraaaAs per our Research, 
                 we found out that Large Number of MSMEs are incurring Huge Losses and are struggling
                  daily to fulfill their accounting and enforcements needs due to Constraints 
                  with respect to their Location, Lack of Fully Trained People to execute their 
                  Accounting Works, Cost Overruns to Fulfill all enforcement needs, and 
                  Poor Quality of Services provided by existing lot. To solve these Problems, 
                  our team is committed to develop creative and cost-effective real-time customized solutions
                   catering to your needs."

                 img1={mountain1}
                 img2={mountain2}
                 
                 />
        </div>
    )
}
export default Destination;