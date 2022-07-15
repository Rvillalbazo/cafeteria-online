import { useState, useEffect, createContext } from "react";
import axios from "axios";

const CafeteriaContext = createContext();

const CafeteriaProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({});
    const [productos, setProductos] = useState([]);
    const [producto, setProducto]=useState({});
    const [modal, setModal]=useState(false);
    
    const obtenerCategorias = async () => {
        const {data} = await axios.get('https://back-cafeteria.herokuapp.com/api/v1/categoria/?status=1');
        setCategorias(data.data);
    }  

    useEffect (() => {
        obtenerCategorias()
    }, [])

    useEffect ( () => {
        setCategoriaActual(categorias[0])
        const obtenerCategorias = async () => {
            const {data} = await axios.get(`https://back-cafeteria.herokuapp.com/api/v1/producto/categoria/${categorias[0]?._id}`);
            setProductos(data.data);
        }  
        obtenerCategorias()
    }, [categorias])

    const handleClickCategoria = async id => {
        const categoria = categorias.filter(cat => cat._id === id)
        const {data} = await axios.get(`https://back-cafeteria.herokuapp.com/api/v1/producto/categoria/${id}`);
        setProductos(data.data);
        setCategoriaActual(categoria[0]);
    }

    const handleSetProducto = producto => {
        setProducto(producto);
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    return(
        <CafeteriaContext.Provider
            value= {{
                categorias,
                categoriaActual,
                handleClickCategoria,
                productos,
                producto,
                handleSetProducto,
                modal,
                handleChangeModal
            }}
        >
            {children}
        </CafeteriaContext.Provider>
    )
}

export {
    CafeteriaProvider
}

export default CafeteriaContext