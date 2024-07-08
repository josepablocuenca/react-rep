import { Flex, Button, Text, Card, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

//card con los productos
const Item = ({imagen, precio, stock, id}) => {
  return (
    <Card maxW='sm' m={'5px'}>
      <CardBody >
      <img src={imagen} width={'100px'} />
      <Text fontSize={'28px'}>${precio} </Text>
      {
      stock > 0 ?
      <Text fontSize={'25px'}>Stock = {stock} </Text>
      :
      <Text fontSize={'25px'}>Sin stock! </Text>
      }
      </CardBody>
      <CardFooter>
      {  
      stock > 0 ?  
      <Button variant="solid" margin={'10px'} background={'lightblue'} >
        <Link to={`/producto/${id}`}>Detalle</Link>
      </Button>
      : 
      <Button variant="solid" margin={'10px'} background={'lightgrey'} >
        Detalle
      </Button>
      }
      </CardFooter>
    </Card>
  )
}

export default Item
