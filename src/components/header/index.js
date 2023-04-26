import React from "react";
import { Link } from "react-router-dom";
import images from "../../images/logo2.jpg"
import { AreaHeader } from "./styled";



function Header(){
    return(
        <div>
            <AreaHeader>
                <div className='container'>
                    
                    <div className='logo'>
                       <Link to="/"> <img src={images} alt="logo" width="85" height="85"/></Link>
                    </div>

                    <nav>
                        <ul>
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to = "/sobre">Sobre</Link></li>
                            <li><Link to = "/cep">Cep</Link></li>
                            <li><Link to="/email">E-mail</Link></li>
                            <li><Link to = "/rick">Rick</Link></li>
                            
                        </ul>

                    </nav>
                </div>
            </AreaHeader>
            
        </div>
    )
}

export default Header;