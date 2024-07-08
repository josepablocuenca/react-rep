import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
//import { getProductosPorId } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { PuffLoader } from 'react-spinners'
import { db } from '../../config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import Context from '../../context/CartContext'

const ItemDetailConteiner = () => {

  const [ producto, setProducto ] = useState ({})
  const [ cargando, setCargando ] = useState(true)

  const { productId } = useParams()

  const { cantidadActual } = useContext(Context)
  const navigate = useNavigate()
  
  useEffect ( ()=> {
    
    const obtenerDatos = async () =>{

        const queryRef = doc(db, 'productos', productId )
        
        const respuesta =  await getDoc(queryRef)

        const nuevoArticulo = {
            ...respuesta.data(),
            id: respuesta.id
        }
        setProducto(nuevoArticulo)
        setCargando(false)
    }
    
    obtenerDatos()
    
        // getProductosPorId(productId)
        //     .then( (data) => {
        //         if(!data){
        //             navigate('/*')
        //         }
        //         else{
        //             setProducto(data)
        //         }
        //     })    
        //     .catch( (error) => console.log(error))
        //     .finally(()=> setCargando(false))
  }, [] )
  return (
    <Flex justify={'center'} align={'center'}>
        {
          //renderizado condicional con if 
          cargando ? 
          <PuffLoader color="#36d7b7" />
          : 
          <ItemDetail {...producto} cantidadActual={cantidadActual(productId)} />
        }
    </Flex>
  )
}

export default ItemDetailConteiner
