import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'

// encargado de mapear los productos
const ItemList = ({productos}) => {
  
  return (
    <Flex wrap={'wrap'} justify={'center'} align={'center'} mt={5} mb={5}>
        {
          productos.map((prod) => (
          <Box key={prod.id}>  
            <Item {...prod} /> 
          </Box>  ))
          
        }
    </Flex>
  )
}

export default ItemList
