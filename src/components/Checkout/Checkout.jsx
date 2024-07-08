import React, { useContext, useState } from 'react'
import Context from '../../context/CartContext'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Center,
  Heading,
  Button
} from '@chakra-ui/react'
import { Timestamp, addDoc, collection, getDoc, updateDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import Swal from 'sweetalert2'
import { Navigate, useNavigate } from 'react-router-dom'


const Checkout = () => {
  
  const [usuario, setUsuario] = useState({
      nombre: '',
      email: '',
      confirmEmail: '',
      cel: ''  

  })
  
  const [error, setError] = useState({ })
  const [loading, setLoading] = useState(false)

  const { carrito, totalCarrito, vaciarCarrito } = useContext(Context)

  const navigate = useNavigate()

  const actualizarUsuario = (event) => {
    setUsuario((usuario) => ({
      ...usuario,
      [event.target.name]: event.target.value
    }))
  }

  const validarForm = () =>{

      const errores = {}

      if(!usuario.nombre){
          errores.nombre = 'Por favor agrega tu nombre!'
      }
      else if(usuario.nombre.length < 4){
          errores.nombre = ' El nombre tiene que tener al menos 4 caracteres'
      }
      if(!usuario.email){
        errores.email = 'Tienes que agregar un correo!'
      }
      else if(!/\S+@\S+\.\S+/.test(usuario.email)){
        errores.email = 'El correo no es valido'
      }
      if(!usuario.confirmEmail){
        errores.confirmEmail = 'No coinciden los correos!'
      }
      if(!usuario.cel){
        errores.cel = 'Debes ingresar un teléfono!'
      }
      else if(usuario.cel.length < 10){
        errores.cel = 'El teléfono debe tener al menos 10 caracteres'
      }
      
      setError(errores)
      return Object.keys(errores).length === 0
  }


  const procesarOrden = async () => {

    if(!validarForm()){
      return
    }
    //evaluamos si el carrito esta vacio

    if( carrito.length === 0 ){
      Swal.fire({
        title: "No agregaste nada al carrito!", 
        icon: "error",
        confirmButtonText: "Aceptar",
  
      }).then(() => {
          
        navigate('/')
      });
      return
    }
    

    const coleccion = collection( db, 'ordenes')

    try{

      for( const articulo of carrito ){

        const docRef = doc(db, 'productos', articulo.id)
        const productDoc = await getDoc(docRef)

        const stockActual = productDoc.data().stock 

        //evaluamos si hay suficiente stock
        if(stockActual >= articulo.quantity){

          await updateDoc(docRef, {
            stock: stockActual - articulo.quantity
          })
        }
        else{
          Swal.fire({
            title: "No hay stock suficiente!", 
            icon: "error",
            confirmButtonText: "Aceptar",
      
          }).then(() => {
              
            navigate('/')
          });
        }

      }
      
      const orden = {
          comprador: usuario,
          cart: carrito,
          total: totalCarrito(),
          fecha: Timestamp.now()
      }

      const orderRef = await addDoc(coleccion, orden)
      Swal.fire({
        title: "Gracias por su compra!", 
        text: `Su orden es: ${orderRef.id}`,
        icon: "success",
        confirmButtonText: "Volver a inicio",

      }).then(() => {
        vaciarCarrito()    
        navigate('/')
      });

    }
    catch (error){
      console.log(error)
    }

  }
  
  return (
    <Center mt={8}>
      <Flex direction={'column'} justify={'center'}>
        <Heading>Por favor complete con sus datos</Heading>
      
        <Flex width={'60%'} justify={'center'} align={'center'}>
        
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input 
                type='text'
                name='nombre' 
                placeholder='Jose Perez'
                onChange={actualizarUsuario}
            />
            {error.nombre}
            <FormLabel>Email</FormLabel>
            <Input 
                type='text'
                name='email' 
                placeholder='joseparez@hotmail.com'
                onChange={actualizarUsuario}
            />
            {error.email}
            <FormLabel>Repetir Email</FormLabel>
            <Input 
                type='text'
                name='confirmEmail' 
                placeholder='joseparez@hotmail.com'
                onChange={actualizarUsuario}
            />
            {error.confirmEmail}
            <FormLabel>Teléfono</FormLabel>
            <Input 
                type='text'
                name='cel' 
                placeholder='2644885598'
                onChange={actualizarUsuario}
            />
            {error.cel}
          </FormControl>
        </Flex>
        <Button variant="solid" mt={'10px'} background={'lightblue'} width={'25%'} onClick={procesarOrden} > Finalizar Compra</Button>
      </Flex>
    </Center>
  )
}

export default Checkout
