import "./style.css";
import BotaoSocial from "../BotaoSocial";
import Logo from "../../assets/images/logo.png";
import IconInsta from "../../assets/images/icon-insta.png";

export default function Footer() {
    return ( 
        <footer>
                {/* <article> */}
                <a href="."><img src={Logo} alt="Logo" /></a>
                    <section>
                        <h2>Empresa</h2>
                        <ul>
                            <li>Sobre</li>
                            <li>Empregos</li>
                            <li>For the Record</li>
                        </ul>
                    </section>
                    <section>
                        <h2>Comunidades</h2>
                        <ul>
                            <li>Para Artistas</li>
                            <li>Desenvolvedores</li>
                            <li>Publicidade</li>
                            <li>Investidores</li>
                            <li>Fornecedores</li>
                        </ul>
                    </section>
                                                
                <div className="redes">
                    <BotaoSocial link={IconInsta} titulo="insta" />
                    <BotaoSocial link={IconInsta} titulo="insta" />
                    <BotaoSocial link={IconInsta} titulo="insta" />              
                </div>
                {/* </article> */}
        </footer>
    )
}
