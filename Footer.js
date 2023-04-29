import "./FooterStyles.css";

const Footer = () =>{
    return(
     <div className="footer">
         <div className="top">

                 <div>
                    <h1>BOOKXPERT</h1>
                    <p >Hyderabad (Head Office):
                       5th floor upstairs of Matrix lab,
                       Dwarakamai building plot no 132,
                       6th phase KPHB colony HYDERABAD,
                       Telangana-500072
                       </p><br/><br/>
                 </div>
                   
                    <div>
                           <a>
                               <i className="fa-brands fa-github"></i>
                           </a>
                           <a>
                               <i className="fa-brands fa-square-instagram"></i>
                           </a>
                           <a>
                               <i className="fa-brands fa-facebook"></i>
                           </a>
                           <a>
                               <i className="fa-brands fa-linkedin" ></i>
                          </a>
                      </div>

         </div>

           <div className="bottom">
             <div>
                <h4>project</h4>
                <a >chalenges</a>
                <a >status</a>
                <a >license</a>
                <a >all versions</a>
             </div>

             <div>
                <h4>community</h4>
                <a >GitHub</a>
                <a >issues</a>
                <a >project</a>
                <a >twitter</a>
             </div>

             <div>
                <h4>help</h4>
                <a >support</a>
                <a >troubleshooting</a>
                <a >Contact us</a>
             </div>

             <div>
                <h4>other</h4>
                <a >terms of service</a>
                <a >privacy policy</a>
                <a >license</a>
             </div>



           </div>
        </div>
    )
}

export default Footer;