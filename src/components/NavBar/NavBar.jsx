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

const NavBar = () => {
  return (
    <Flex padding={'15px'} justify={'space-between'} background={'lightskyblue'} h={'70px'}>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='outline'
            />
            <MenuList>
                <MenuItem icon={<AddIcon />} command='⌘T'>
                New Tab
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                New Window
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                Open Closed Tab
                </MenuItem>
                <MenuItem icon={<EditIcon />} command='⌘O'>
                Open File...
                </MenuItem>
            </MenuList>
        </Menu>
        <Heading> React E-commerce!</Heading>
        <CartWidget />    
      
    </Flex>
  )
}

export default NavBar
