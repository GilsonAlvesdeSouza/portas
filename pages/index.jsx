import Presente from "../components/Presente";
import Porta from "../components/Porta";
import PortaModel from "../model/PortaModel";
import {useState} from "react";

export default function Home() {

    const [porta, setPorta] = useState(new PortaModel(1));

    return (
        <div>
            <Porta porta={porta}/>
        </div>
    )
}
