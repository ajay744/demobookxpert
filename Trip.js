import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/8.jpg";
function Trip(){
    return(
        <div className="trip">
            <h1>Innovative Solutions For Account Problems</h1>
            <p>Our model is flexible enough to support individual needs
             and circumstances that you can outsource totally or partially:
            </p>
            <div className="SERVICE">

                <TripData
                image={Trip1 }
                heading="SERVICE"
                text="
                Our solution deploys the services of team comprising of accounting,
                law, and technology experts( instead of a conventional single individual 
                who is neither trained nor updated.)

                "
                />

               <TripData
                image={Trip2 }
                heading="SERVICE"
                text="Trained operators in a dedicated call centre can enter all data into an
                    specially designed online platform ( can provide Owners up to date MIS and Alerts 
                    helping them to take Rational and 
                    Data Driven Decisions instead of depending solely on Intuition)
                "
                />

                 <TripData
                image={Trip3 }
                heading="SERVICE"
                text="Our Team ensures that data is perfect and complete before sending
                 it for compliances & your/our professionals’ use. 
                 (Professionals’ time is reduced and reliability impro"
                />

            </div>
        </div>
    )
}

export default Trip;