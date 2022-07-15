import Image from "next/image";
import useCafeteria from "../hooks/useCafeteria";
import Categoria from "./Categoria";


const Sidebar = () => {
    const {categorias} = useCafeteria();
  return (
    <>
        <Image width={300} height={180} src="/assets/st_small_845x845-pad_1000x1000_f8f8f8.u3.svg"
        alt="Imagen logo"/>

        <nav className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                    key={categoria._id}
                    categoria={categoria}
                />
            ))}
        </nav>
    </>
    )
}

export default Sidebar