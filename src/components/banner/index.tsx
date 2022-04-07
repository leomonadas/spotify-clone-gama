import "./style.css";
import Button from "../Buttons";

function Banner () {
    return ( 
    <main id="banner">
        <h1>Escutar muda <br /> tudo</h1>
        <p>
            Milhões de músicas e podcasts para explorar. E nem precisa de cartão de crédito.
        </p>
        <Button texto="Baixe o spotify free" variante="sucesso" />
    </main>
    )
}

export default Banner;