import React from 'react'
import {
    Heading,
    Flex,
  } from '@chakra-ui/react'

function ItemListConteiner({titulo}) {
  return (
    <Flex justify={'center'}>
        <Heading>{titulo}</Heading>
    </Flex>
  )
}

export default ItemListConteiner
