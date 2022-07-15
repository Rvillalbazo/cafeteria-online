import Image from "next/image"
import { formatearDinero } from "../helpers"
import useCafeteria from "../hooks/useCafeteria";

const Producto = ({producto}) => {
    const {nombre, imagen, precio} = producto;
    const pre =parseFloat(precio.$numberDecimal);

    const {handleSetProducto, handleChangeModal} = useCafeteria();

  return (
    <div className="border p-3 ">
        <Image
            src = {`/assets/img/${imagen}.jpg`} 
            alt={`Imagen producto ${nombre}`}
            width={400}
            height={500}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <p className="mt-5 font-black text-4xl text-green-800">
                {formatearDinero(pre)}
            </p>

            <button
                type="button"
                className="bg-yellow-700 hover:bg-yellow-900 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleChangeModal();
                    handleSetProducto(producto);
                }}>
                agregar
            </button>
        </div>
        
    </div>
  )
}

export default Producto