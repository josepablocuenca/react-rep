import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-toastify/dist/ReactToastify.css'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner'
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {

  return (
      <div>
        <ChakraProvider>
          {/* <BrowserRouter>  nos permite manejar el enrutamiento de la app */}
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListConteiner titulo={'Bienvenidos a la tienda'} />} /> 
              <Route path='/categorias/:categoryId' element={<ItemListConteiner titulo={'Bienvenidos a la tienda'} />} /> 
              <Route path='/producto/:productId' element={<ItemDetailConteiner />} />  
              <Route path='*' element={<PageNotFound />} />        
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </div>
  )
}

export default App

