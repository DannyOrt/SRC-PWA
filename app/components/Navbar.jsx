'use client'

import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  AvatarIcon
} from '@nextui-org/react'

import { SCRIcon } from '@/app/assets'
import { AvatarDropdown } from '@/app/components/AvatarDropdown'
export const Navbar = () => {
  return (
    <Nav>
      <NavbarBrand>
        <SCRIcon />
        <p className='font-bold text-inherit'>SCR</p>
      </NavbarBrand>

      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='/#'>
            Electrovalvulas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='/#sismos'>
            Reportes de Sismos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as='div' justify='end'>
        <AvatarDropdown />
      </NavbarContent>
    </Nav>
  )
}
