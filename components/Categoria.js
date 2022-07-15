import Image from "next/image";
import useCafeteria from "../hooks/useCafeteria";

const Categoria = ({categoria}) => {
    const {nombre, icono, _id} = categoria;
    const {categoriaActual, handleClickCategoria} = useCafeteria();
    return (
        <div className= {`${categoriaActual?._id === _id ? 'bg-green-600':''} flex item-center gap-4 w-full border p-5 hover:bg-green-400`}>
            <Image 
                width={75}
                height={75}
                src={`/assets/icono_${icono}.svg`}
                alt="Imagen Icono "
            />

            <button
                type="button"
                className="text-2xl font-bold hover:cursor-pointer"
                onClick={() => handleClickCategoria(_id)}>
                {nombre}
            </button>
        </div>
    )
}

export default Categoria