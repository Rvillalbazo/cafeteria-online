import Image from "next/image";
import useCafeteria from "../hooks/useCafeteria";
import { formatearDinero } from "../helpers";
import { useState } from "react";

const ModalProducto = () => {
    const {producto, handleChangeModal} = useCafeteria();
    const [cantidad, setCantidad]= useState(1);
    let total;

  return (
    <div className="md:flex gap-10">
        <div className="md:w-1/3">
            <Image
                width={300}
                height={400}
                alt={`imagen producto ${producto.nombre}`}
                src={`/assets/img/${producto.imagen}.jpg`}
            />
        </div>
        <div className="md:w-2/3">
            <div className="flex justify-end">
                <button
                    onClick={handleChangeModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
            <p className="mt-5 font-black text-4xl text-emerald-700">
                {formatearDinero(parseFloat(producto.precio.$numberDecimal))}
            </p>
            <div className="flex gap-4 mt-5 ">
                <button 
                    type="button" onClick={() => {
                        if(cantidad<=1) return 
                        setCantidad(cantidad -1 )
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <p className="text-3xl">{cantidad}</p>
                <button
                    type="button" onClick={() => {
                        setCantidad(cantidad +1 )
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
            </div>
            <div className="flex gap-4 mt-5 ">
                <p className="font-black text-justify text-xl text-gray-800">
                    TOTAL: {formatearDinero(cantidad * parseFloat(producto.precio.$numberDecimal))}
                </p>
            </div>
            <button className="flex gap-4 mt-5 px-5" 
                    type="button">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                AGREGAR AL CARRITO
            </button>
        </div>
    </div>
  )
}

export default ModalProducto