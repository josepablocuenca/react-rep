import React from 'react'
import {
  Box,
} from '@chakra-ui/react'

import { BsCart } from "react-icons/bs";

function CartWidget() {
  return (
    <Box m={'10px'}>
      <BsCart />
    </Box>
  )
}

export default CartWidget
