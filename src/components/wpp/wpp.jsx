import { Link } from "react-router-dom";
import "./wppS.css";


const Wpp = () => {
    return (
        <>
            
            <div className="wpp">
                <Link to="https://wa.me/+543541540017?text=Hola! Estoy visitando su página web y me gustaría obtener más información sobre ">
                    <img src="../assets/img/whatsapp.png" className="w-20 "/>
                </Link>
            </div>

        </>
    )
}

export default Wpp;