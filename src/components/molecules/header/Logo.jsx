import { Link } from "react-router-dom"
import Icono from "../../../../public/assets/vite.svg"

const Logo = () =>{
    return(
        <>
         <div className="flex">
            <Link to='/'>
            <img src={Icono} alt="Logo Google"/>
            </Link> 
         </div>
        </>

    )
}

export default Logo