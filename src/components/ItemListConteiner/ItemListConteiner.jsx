import React, { useEffect, useState } from 'react'
import {Heading, Flex, Center} from '@chakra-ui/react'
import { getProductos, getProductosPorCategoria} from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useNavigate, useParams } from 'react-router-dom'
import {PuffLoader} from 'react-spinners'

// encargado de obtener los productos
const ItemListConteiner = ({titulo}) => {

  const [ productos, setProductos] = useState ([])
  const [ cargando, setCargando ] = useState (true)

  const {categoryId} = useParams()
  //console.log(categoryId)

  const navigate = useNavigate()
  useEffect(() => {
    //inicializamos estado del spinner
    setCargando(true)

    const productosObtenidos = categoryId ? getProductosPorCategoria(categoryId) : getProductos()
    
    productosObtenidos
      .then( (res) => { setProductos(res)  })
      .catch((error) => console.log(error))
      .finally(() => setCargando(false))
 
  },[categoryId])

  // useEffect(() => {
  //   getProductos()
  //     .then((res) => setProductos(res))
  //     .catch((error) => console.log(error))
  // },[])  
  
  //console.log(productos)
  
  return (
    <Flex direction={'column'} align={'center'} >

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
