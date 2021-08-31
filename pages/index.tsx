import Porta from "../components/Porta";
import PortaModel from "../model/PortaModel";
import {useState} from "react";

export default function Home() {

    const [porta, setPorta] = useState(new PortaModel(1));

    return (
        <div>
            <Porta value={porta} onChange={novaPorta => setPorta(novaPorta)}/>
        </div>
    )
}
