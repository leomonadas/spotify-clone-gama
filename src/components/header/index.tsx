import React from "react";
import Logo from "../../assets/images/logo.png";
import "./style.css";
import { Link } from "react-router-dom";

function Header() {
    return (
    <div id="navbar">
        <a href="."><img src={Logo} alt="Logo" /></a>
        <ul id="headerlist">
           
            <li> <a href="">
                <Link to="/sobre">Premium</Link>
            </a></li>
            <li><a href=".">Suporte</a></li>
            <li><a href=".">Baixar</a></li>
            <li><a>|</a></li>
            <li><a href=".">Inscrever-se</a></li>
            <li><a href=".">Entrar</a></li>
        </ul>
    </div>
    )
}

export default Header;

// import React from "react";
// import Logo from "../../assets/images/logo.png";
// import "./styles.css";

// import { Link } from "react-router-dom";
// const Header: React.FC = () => {
//   return (
//     <header id="menu">
//       <div className="wrapper">
//         <img className="logo" src={Logo} alt="Logo Spotify" />

//         <nav>
//           <a href="">Premium</a>
//           <a href="/sobre">Suporte</a>
//           <a href="">Baixar</a>
//           <span className="divisor"></span>
//           <a href="">Inscrever-se</a>
//           <a href="">Entrar</a>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
