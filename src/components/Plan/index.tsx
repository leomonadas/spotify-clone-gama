import PlanTitle from "../PlanTitle";
import "./style.css";

interface PropsPlansItens {
    vantagemUm?: string;
    vantagemDois?: string;
    vantagemTres?: string;
    vantagemUquatro?: string;
    vantagemCinco?: string;
}

export default function Plans(props: PropsPlansItens) {
    return (
        <section className="card">
            <PlanTitle title="Lorem" subtitle="Ipsum"/>
            {/* <PlanItem item="Lorem" /> */}
            <hr></hr>
            <ul>
                <li>{props.vantagemUm}</li>
                <li>{props.vantagemDois}</li>
                <li>{props.vantagemTres}</li>
                <li>{props.vantagemUquatro}</li>
                <li>{props.vantagemCinco}</li>
            </ul>
        </section>
    )
}