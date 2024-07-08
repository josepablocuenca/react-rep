import React, { useContext, useState } from 'react'
import Item from '../Item/Item'
import { Button, Card, CardBody, CardFooter, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext'

const ItemDetail = ({id, marca, variedad, precio, stock, imagen, cantidadActual}) => {
  const [ cantidad, setCantidad] = useState(0)
  const { agregarItem } = useContext(Context)
  const maximaDisponible = stock - cantidadActual 

  const agregarCarrito = (quantity) => {

        const item = {
          id,
          marca,
          variedad,
          imagen,
          precio,
          stock
        }

        agregarItem(item, quantity)

        toast(`Agregaste ${quantity} unidades al carrito`)
        setCantidad(quantity)
  } 

  return (
      <Card justify={'center'} align={'center'} width={'40%'} border={'solid'} borderColor={'lightgrey'}> 
        <CardBody width={'50%'} >
          <img src={imagen} width={'70%'}/>
          <Text fontSize={'20px'}>Marca : {marca} </Text>
          <Text fontSize={'20px'}>Variedad : {variedad} </Text>
          <Text fontSize={'20px'}>Precio : ${precio} </Text>
          <Text fontSize={'20px'}>Stock disponible : {stock} </Text>
          <Text fontSize={'20px'}>Cantidad actual en carrito : {cantidadActual} </Text>
        </CardBody>
        <CardFooter>
        {
          cantidad > 0 ?
          <Flex justify={'space-around'} align={'center'} width={'100%'}>

          <Button variant="solid" margin={'10px'} background={'lightblue'} >
            <Link to='/cart'>Carrito</Link>
          </Button>
                    <Button variant="solid" margin={'10px'} background={'lightblue'} >
                    <Link to='/'>Sigamos comprando!</Link>
                  </Button>
          </Flex>
        :  
          <ItemCount stock={stock} inicial={1} agregarCarrito={agregarCarrito} maximaDisponible={maximaDisponible} />  
        }
        </CardFooter>
        <ToastContainer />
      </Card>
  )
}

export default ItemDetail
 