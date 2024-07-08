import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { CartContextProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'

function App() {

  return (
      <div>
        <ChakraProvider>
          <CartContextProvider>
          {/* <BrowserRouter>  nos permite manejar el enrutamiento de la app */}
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListConteiner titulo={'Bienvenidos a la tienda'} />} /> 
              <Route path='/categorias/:categoryId' element={<ItemListConteiner titulo={'Bienvenidos a la tienda'} />} /> 
              <Route path='/producto/:productId' element={<ItemDetailConteiner />} />  
              <Route path='/cart' element={<Cart />} />  
              <Route path='/Checkout' element={<Checkout />} />
              <Route path='*' element={<PageNotFound />} />        
            </Routes>
          </BrowserRouter>
          </CartContextProvider>
        </ChakraProvider>
      </div>
  )
}

export default App

