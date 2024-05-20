import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import NavBar from './components/NavBar/NavBar'


function App() {

  return (
      <div>
        <ChakraProvider>

          <NavBar />
          <ItemListConteiner  titulo='Bienvenido al sitio de compras on line!'/>
          
        </ChakraProvider>
      </div>
  )
}

export default App

