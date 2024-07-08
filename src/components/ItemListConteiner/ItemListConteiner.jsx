import React, { useEffect, useState } from 'react'
import {Heading, Flex, Center} from '@chakra-ui/react'
//import { getProductos, getProductosPorCategoria} from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useNavigate, useParams } from 'react-router-dom'
import {PuffLoader} from 'react-spinners'
import { db } from '../../config/firebase'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'

// encargado de obtener los productos
const ItemListConteiner = ({titulo}) => {

  const [ productos, setProductos] = useState ([])
  const [ cargando, setCargando ] = useState (true)

  const {categoryId} = useParams()
  //console.log(categoryId)
  //console.log(db)
  const navigate = useNavigate()
  useEffect(() => {
    //inicializamos estado del spinner
    setCargando(true)
    
    const obtenerDatos = async() => {
        const coleccion = collection(db, 'productos')
        
        const queryRef = !categoryId ? 
        coleccion
        :
        query(coleccion, where('categoria', '==' , categoryId))

        const respuesta = await getDocs(queryRef)

        //console.log(respuesta)

        const productos = respuesta.docs.map( (doc) => {
            const nuevoArticulo = {
              ...doc.data(),
              id: doc.id
            }
            return nuevoArticulo
        })
        //console.log(productos)
        setProductos(productos)
        setCargando(false)
    }
    obtenerDatos()
    // const productosObtenidos = categoryId ? getProductosPorCategoria(categoryId) : getProductos()
    
    // productosObtenidos
    //   .then( (res) => { setProductos(res)  })
    //   .catch((error) => console.log(error))
    //   .finally(() => setCargando(false))
 
  },[categoryId])

  
  return (
   
   <Flex direction={'column'} align={'center'}>

        <Heading>{titulo}</Heading>
        {
          //renderizado condicional con if 
          cargando ? 
          <PuffLoader color="#36d7b7" />
          : 
          <ItemList productos={productos} />
        }
    </Flex>
  )
}

export default ItemListConteiner
