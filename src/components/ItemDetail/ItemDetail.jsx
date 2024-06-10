import React from 'react'
import Item from '../Item/Item'
import { Button, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';

const ItemDetail = ({marca, variedad, precio, stock, imagen}) => {

  const agregarCarrito = (cantidad) => {
        toast(`Agregaste ${cantidad} unidades al carrito`)
  } 

  return (
    <Flex direction={'column'} justify={'center'} width={'60px'} alignItems={'center'} margin={'30px'}>
      <img src={imagen}/>
      <Text fontSize={'20px'}>{marca} </Text>
      <Text fontSize={'20px'}>{variedad} </Text>
      <Text fontSize={'20px'}>${precio} </Text>
      <ItemCount stock={stock} inicial={1} agregarCarrito={agregarCarrito}/>  
      <ToastContainer />
    </Flex>
  )
}

export default ItemDetail
