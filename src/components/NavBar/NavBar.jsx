import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Flex,
    IconButton,
    Heading,
   

  } from '@chakra-ui/react'
  import {  
    HamburgerIcon, 
    AddIcon, 
    ExternalLinkIcon, 
    RepeatIcon,
    EditIcon, 

  } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex padding={'15px'} justify={'space-between'} background={'lightskyblue'} h={'90px'}>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem >
                  <Link to='/categorias/Vino'> VINOS</Link>
                </MenuItem>
                <MenuItem >
                  <Link to='/categorias/Cerveza'> CERVEZAS</Link>
                </MenuItem>
                <MenuItem>
                  <Link to='/categorias/Whiskie'> WHISKIES</Link> 
                </MenuItem>
            </MenuList>
        </Menu>
        <Heading> React E-commerce!</Heading>
        <CartWidget />    
      
    </Flex>
  )
}

export default NavBar
