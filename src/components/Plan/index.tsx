import Button from "../Buttons";
import "./style.css";

interface PropsPlansItens {
    periodogratis?: string;
    pagamento?: string;
    title?: string;
    subtitle?: string;
    qntdcontas?: string;
    vantagemUm?: string;
    vantagemDois?: string;
    vantagemTres?: string;
    vantagemUquatro?: string;
    vantagemCinco?: string;
    termos?: string
}

export default function Plans(props: PropsPlansItens) {
    return (
        <section className="card">
                <div>
                    <ul>
                        <li><span className="blue-line">{props.periodogratis}</span></li>
                        {/* <li><span className="blue-outline">{props.pagamento}</span></li> */}
                    </ul>
                    
                    <h1>{props.title}</h1>
                    <p>{props.subtitle}/mês após o período da oferta</p>
                    <p>{props.qntdcontas}</p>
                </div>
                {/* <PlanTitle title="Lorem" subtitle="Ipsum"/> */}
                {/* <PlanItem item="Lorem" /> */}
                <hr></hr>
                <ul>
                    <li>{props.vantagemUm}</li>
                    <li>{props.vantagemDois}</li>
                    <li>{props.vantagemTres}</li>
                    <li>{props.vantagemUquatro}</li>
                    <li>{props.vantagemCinco}</li>
                </ul>
                <div>
                    <Button texto="Começar" variante="comecar" />
                    <p className="termos">{props.termos}</p>
                </div>
        </section>
    )
}