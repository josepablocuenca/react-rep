import { Flex, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

//card con los productos
const Item = ({imagen, precio, id}) => {
  return (
    <Flex direction={'column'} justify={'center'} width={'60px'} align={'center'} margin={'30px'}>
      <img src={imagen}/>
      <Text fontSize={'20px'}>${precio} </Text>
      <Button variant="solid" margin={'10px'} background={'lightblue'} >
        <Link to={`/producto/${id}`}>Detalle</Link>
      </Button>
      {/* <h1>{prod.variedad}</h1> */}
    </Flex>
  )
}

export default Item
