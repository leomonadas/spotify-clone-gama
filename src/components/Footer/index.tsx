import "./style.css";
import Button from "../Buttons";
import Logo from "../../assets/images/logo.png";

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
                                                
                <ul id="socialbutton">
                    <li><Button texto="" variante="instagram" /></li>
                    <li><Button texto="" variante="twitter" /></li>
                    <li><Button texto="" variante="facebook" /></li>                
                </ul>
                {/* </article> */}
        </footer>
    )
}
