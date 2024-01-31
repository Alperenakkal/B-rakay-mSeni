import {Outlet} from "react-router-dom";
import NavBar from "./NavBar"
import Footer from "./Footer";
const Templete =()=>{
    return(
        <div>
            <NavBar/>
            <div className="container"></div>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Templete;