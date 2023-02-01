import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
    
      // <div className="footer">
       return <h4 className="p-10 m-10">This site is Developed By Suji{user.name}-{user.email}</h4>
        {/* <h3 className="footerText">HungerBox</h3> */}
      // </div>
    
  };
  export default Footer;