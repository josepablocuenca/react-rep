import React, { useContext } from 'react'
import {
  Box,
  Flex,
  useConst,
} from '@chakra-ui/react'

import { BsCart } from "react-icons/bs";
import Context from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  
  const { cantCarrito } = useContext(Context)
  
  return (
    <Flex justify={'space-around'} align={'center'} m={'10px'}  >
      <Link to='/cart'><BsCart size={'35px'}/></Link>
      <div>{ cantCarrito() > 0 && cantCarrito() }</div>
    </Flex>
  )
}

export default CartWidget
