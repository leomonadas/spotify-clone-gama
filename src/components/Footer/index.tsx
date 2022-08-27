import "./style.css";
import BotaoSocial from "../BotaoSocial";
import Logo from "../../assets/images/logo.png";
import IconInsta from "../../assets/images/instagram.svg";
import IconTwitter from "../../assets/images/twitter.svg";
import IconFacebook from "../../assets/images/facebook.svg";

export default function Footer() {
    return ( 
        <footer>
                {/* <article> */}
                <a href="."><img src={Logo} alt="Logo" /></a>
                    <section>
                        <h2>Empresa</h2>
                        <ul>
                            <li><a href=".">Sobre</a></li>
                            <li><a href=".">Empregos</a></li>
                            <li><a href=".">For the Record</a></li>
                        </ul>
                    </section>
                    <section>
                        <h2>Comunidades</h2>
                        <ul>
                            <li><a href=".">Para Artistas</a></li>
                            <li><a href=".">Desenvolvedores</a></li>
                            <li><a href=".">Publicidade</a></li>
                            <li><a href=".">Investidores</a></li>
                            <li><a href=".">Fornecedores</a></li>
                        </ul>
                    </section>
                                                
                <div className="redes">
                    <BotaoSocial link={IconInsta} titulo="insta" />
                    <BotaoSocial link={IconTwitter} titulo="twitter" />
                    <BotaoSocial link={IconFacebook} titulo="facebook" />              
                </div>
                {/* </article> */}
        </footer>
    )
}
