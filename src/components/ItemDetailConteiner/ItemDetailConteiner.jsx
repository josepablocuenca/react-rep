import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductosPorId } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { Flex } from '@chakra-ui/react'
import { PuffLoader } from 'react-spinners'

const ItemDetailConteiner = () => {

  const [ producto, setProducto ] = useState ({})
  const [ cargando, setCargando ] = useState(true)

  const { productId } = useParams()

  const navigate = useNavigate()
  
  useEffect ( ()=> {
        getProductosPorId(productId)
            .then( (data) => {
                if(!data){
                    navigate('/*')
                }
                else{
                    setProducto(data)
                }
            })    
            .catch( (error) => console.log(error))
            .finally(()=> setCargando(false))
  }, [] )
  return (
    <Flex justify={'center'} align={'center'}>
        {
          //renderizado condicional con if 
          cargando ? 
          <PuffLoader color="#36d7b7" />
          : 
          <ItemDetail {...producto} />
        }
    </Flex>
  )
}

export default ItemDetailConteiner
