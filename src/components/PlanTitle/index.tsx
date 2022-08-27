import "./style.css";

interface PropsPlan {
    title: string;
    subtitle: string;
}

export default function PlanTitle(props: PropsPlan) {
    return (
        <section>
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </section>
    )
}