interface PropsButton {
    texto: string;
    variante: string;
}

export default function Button(props: PropsButton){
    return <button className="`{props.variante}`">{props.texto}</button>
}