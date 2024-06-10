import React, { useState } from 'react'
import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'

const ItemCount = ({stock, inicial, agregarCarrito}) => {
    //creamos un estado del componente Contador
    const [ contador, setContador] = useState(inicial)

    const incrementarContador = () => {
        contador < stock && setContador(contador + 1)
    }
    const decrementarContador = () => {
        contador > inicial && setContador(contador - 1)
    }
   // console.log(contador)
  return (
    <Flex justify={'center'} align={'center'} > 
        <Button colorScheme='teal' variant='outline' onClick={decrementarContador}>-</Button>
        <Text margin={'10px'}>{contador}</Text>
        <Button colorScheme='teal' variant='outline' onClick={incrementarContador}>+</Button>
        <Button colorScheme='blue' margin={'10px'} onClick={()=> agregarCarrito(contador)}>Agregar al carrito</Button>   
    </Flex>
  )
}

export default ItemCount
