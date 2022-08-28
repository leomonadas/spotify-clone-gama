import Button from "../Buttons";
import "./style.css";

function BannerPremium() {
    return (
        <section>
            <div>
                <Button texto="Aproveite 3 meses grátis" variante="black" />
                <Button texto="Ver Planos" variante="outline-white" />
            </div>
        </section>
    )
}

export default BannerPremium;