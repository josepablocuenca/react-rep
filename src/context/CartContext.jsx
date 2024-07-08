import React, { createContext, useState } from 'react'

const Context = createContext()

export const CartContextProvider = ( { children }) => {
    
    const [ carrito, setCarrito] = useState([])
   
    const agregarItem = ( productoAgregar, quantity ) => {

        const nuevoArticulo = {
            ...productoAgregar,
            quantity
        }
        if(existeEnCarrito(nuevoArticulo.id)){
            const actualizoCarrito = carrito.map((prod) => {

                if(prod.id === nuevoArticulo.id){
                    return { ...prod, quantity: prod.quantity + nuevoArticulo.quantity }
                }
                return prod
            })
            setCarrito(actualizoCarrito)
        }
        else{
            setCarrito([...carrito, nuevoArticulo])
        }
    }
  
    const existeEnCarrito = (id) =>  {
        return carrito.some((prod) => prod.id === id)
    } 

    const eliminarArticulo = (id) => {
        const actualizoCarrito = carrito.filter((prod) => prod.id !== id )
        setCarrito([...actualizoCarrito])
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const totalCarrito = () => {
        return carrito.reduce((actual, articulo) => actual + articulo.precio * articulo.quantity, 0 )
    }

    const cantCarrito = () => {
        return carrito.reduce((actual, articulo) => actual + articulo.quantity, 0 )    
    }

    const decrementarItem = (id) =>{

        const actualizoCarrito = carrito.map((prod) =>{
            if(prod.id === id){
                const cantNueva = Math.max(prod.quantity - 1, 1)
                return {...prod, quantity: cantNueva}
            }
            return prod
        })
        setCarrito(actualizoCarrito)
    }

    const incrementarItem = (id, stock) =>{

        const actualizoCarrito = carrito.map((prod) =>{
            if(prod.id === id){
                const cantNueva = Math.min(prod.quantity + 1, stock)
                return {...prod, quantity: cantNueva}
            }
            return prod
        })
        setCarrito(actualizoCarrito)
    }

    const cantidadActual = (id) =>{
        const prod = carrito.find((articulo) => articulo.id === id )
        return prod ? prod.quantity : 0 

    }

    return (
        <Context.Provider
            value={{
                carrito,
                setCarrito,
                agregarItem, 
                eliminarArticulo,
                vaciarCarrito,
                totalCarrito,
                cantCarrito,
                decrementarItem,
                incrementarItem,
                cantidadActual    
            }}>
                {children}
        </Context.Provider>

    )
}

export default Context
