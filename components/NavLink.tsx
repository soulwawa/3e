import React from "react";
import Link from 'next/link'
import styled from 'styled-components'


const StyledLink = styled.a`
  color: white;
  font-weight: bolder;
  font-style: italic;
  text-decoration: none;
`

type TNavLink = {
  href: string,
  name: string
}


function NavLink({ href, name }:TNavLink) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  )
}

export default NavLink
