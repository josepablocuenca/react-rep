import React, { useContext } from 'react'
import { Button, Flex, Heading, Text} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { RiDeleteBin6Line } from "react-icons/ri";  
import Context from '../../context/CartContext';


const Cart = () => {
  const { carrito, eliminarArticulo, vaciarCarrito, totalCarrito, decrementarItem, incrementarItem} = useContext(Context)  
  if(carrito.length === 0){
    return(
        <Flex direction={'column'} justify={'center'} align={'center'}>
            <Heading  m={'30px'}>Aún no agregaste articulos a tu carrito</Heading>
            <Button><Link to='/'>Home</Link></Button>
        </Flex>
    )

  }
  else{
    return (
        <TableContainer>
        <Table variant='striped' colorScheme='teal'>
            {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead>
                    <Tr> 
                        <Th fontSize={'18px'}>Nombre</Th>
                        <Th fontSize={'18px'}>Cantidad</Th>
                        <Th fontSize={'18px'}>Precio unitario</Th>
                        <Th fontSize={'18px'}>Subtotal</Th>  
                    </Tr>
                </Thead>
                <Tbody>
                {
                    carrito.map((prod) =>(
                    <Tr key={prod.id}>
                        <Td>{prod.marca} {prod.variedad}</Td>
                        <Td>
                            <Button onClick={()=> decrementarItem(prod.id)} > - </Button>
                            {prod.quantity}
                            <Button onClick={()=> incrementarItem(prod.id, prod.stock)}> + </Button>
                        </Td>
                        <Td>$ {prod.precio}</Td>
                        <Td>$ {prod.precio*prod.quantity}</Td>
                        <Td><Button onClick={()=>eliminarArticulo(prod.id)}><RiDeleteBin6Line /></Button></Td>
                    </Tr>
                    ))
                }   
                </Tbody>
            <Tfoot>
            <Tr>   
                <Th> <Heading>TOTAL= $ {totalCarrito()}</Heading> </Th>
                <Th><Button><Link to='/Checkout'>Finalizar Compra</Link></Button> </Th>
                <Th><Button onClick={() => vaciarCarrito()}>Vaciar Carrito</Button></Th>
            </Tr>
            </Tfoot>
        </Table>
        </TableContainer>
    )
  } 
}

export default Cart
