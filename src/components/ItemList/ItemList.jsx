import React from 'react'
import Item from '../Item/Item'
import { Box, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'

// encargado de mapear los productos
const ItemList = ({productos}) => {
  
  return (
    <Flex>
        {
          productos.map((prod) => (
          <Box key={prod.id}>  
            <Item {...prod} /> 
            {/* <ItemCount /> */}
          </Box>  ))
          
        }
    </Flex>
  )
}

export default ItemList
